const isValidDate = (d) => {
	return d instanceof Date && !isNaN(d)
}

const isNotThere = (input) => {
	return !input || input.trim() == '' || input.trim() == 'undefined'
}

module.exports = function (env) {
	/**
	 * Instantiate object used to store the methods registered as a
	 * 'filter' (of the same name) within nunjucks. You can override
	 * gov.uk core filters by creating filter methods of the same name.
	 * @type {Object}
	 */
	var filters = {}

	const numberToMonthString = (input) => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
		return months[Number(input)]
	}

	filters.month = (number) => numberToMonthString(number - 1)

	filters.dateFromInputs = (_, day, month, year) => {
		const outputDate = Date.parse(
			`${day} ${filters.month(month)} ${year} 00:00:00 GMT`
		)
		return outputDate
	}

	filters.friendlyDate = (str) => {
		if (!str) {
			return '-'
		}
		const date = new Date(str)
		return (
			date.getDate() +
			' ' +
			numberToMonthString(date.getMonth()) +
			' ' +
			date.getFullYear()
		)
	}

	filters.autoClaimDate = (_, caringDate, awardDate, decisionDate) => {
		const today = new Date()
		const threeMonthsBeforeToday = today.setMonth(today.getMonth() - 3)
		const decisionIsWithin3Months =
			new Date(decisionDate) > threeMonthsBeforeToday
		const qbDate = decisionIsWithin3Months
			? new Date(awardDate)
			: new Date(awardDate) > threeMonthsBeforeToday
				? new Date(awardDate)
				: threeMonthsBeforeToday
		const dates = [new Date(caringDate), new Date(qbDate)]
		let hasInvalidDate = false
		let latestDate = new Date()
		for (const date of dates) {
			if (!(date instanceof Date)) {
				hasInvalidDate = true
			}
		}
		if (!hasInvalidDate) {
			latestDate = new Date(
				Math.max.apply(
					null,
					dates.map((date) => {
						return date.getTime()
					})
				)
			)
		}
		if (latestDate.getDay() != 1) {
			return latestDate.setDate(
				latestDate.getDate() + ((1 + 7 - latestDate.getDay()) % 7)
			)
		}
		return latestDate
	}

	filters.getTime = (dateString) => {
		const date = new Date(dateString)
		return date.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		})
	}

	filters.getDay = (dateString) => {
		const date = new Date(dateString)
		return date.getDate()
	}

	filters.getMonth = (dateString) => {
		const date = new Date(dateString)
		return date.getMonth() + 1
	}

	filters.getYear = (dateString) => {
		const date = new Date(dateString)
		return date.getFullYear()
	}

	filters.getClaimDate = (data) => {
		const dayInput = data['claim-date--claim-date-day'] || 23
		const monthInput = data['claim-date--claim-date-month'] || 10
		const yearInput = data['claim-date--claim-date-year'] || 2020
		return `${dayInput} ${filters.month(monthInput)} ${yearInput}`
	}

	filters.addressOptions = (addressOptionArray, currentSelection) => {
		currentSelection = currentSelection ? currentSelection : ''
		if (Array.isArray(addressOptionArray)) {
			const processedAddressOptionArray = addressOptionArray.map(
				(addressOption) => {
					return {
						text: addressOption.text,
						value: addressOption.value,
						selected: addressOption.value == currentSelection ? true : false,
					}
				}
			)
			return processedAddressOptionArray
		} else {
			return []
		}
	}

	filters.placeOptions = (placeOptionArray, currentSelection) => {
		currentSelection = currentSelection ? currentSelection : ''
		if (Array.isArray(placeOptionArray)) {
			const processedAddressOptionArray = placeOptionArray.map(
				(addressOption) => {
					var outputObject = {
						text: addressOption.name,
						value: addressOption.id,
						selected: addressOption.id == currentSelection ? true : false,
						hint: addressOption.locale
							? { text: 'in ' + addressOption.locale }
							: null,
					}
					return outputObject
				}
			)
			processedAddressOptionArray.push({
				text: 'Search again',
				value: 'other',
			})
			return processedAddressOptionArray
		} else {
			return []
		}
	}

	filters.includes = (arrayOfStrings, testString) => {
		if (Array.isArray(arrayOfStrings)) {
			if (arrayOfStrings.indexOf(testString) != -1) {
				return true
			}
		}
		return false
	}

	filters.secure = (url) => url.replace(/^http:\/\//i, 'https://')

	filters.debug = (obj) => {
		return JSON.stringify(obj)
	}

	filters.lowerCase = (str) => (str ? str.toLowerCase() : '')

	filters.upperCase = (str) => (str ? str.toUpperCase() : '')

	filters.titleCase = (str) => {
		if (str) {
			return str.replace(/\w\S*/g, (txt) => {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			})
		} else {
			return ''
		}
	}

	filters.frequencySuffix = (response) => {
		switch (response) {
			case 'Once a week':
				return 'a week'

			case 'Every 2 weeks':
				return 'every 2 weeks'

			case 'Every 4 weeks':
				return 'every 4 weeks'

			default:
				return 'a month'
		}
	}

	filters.sentenceCase = (str) => {
		if (str) {
			return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
		} else {
			return ''
		}
	}

	filters.default = (dataItem, fallbackString) => {
		if (isNotThere(dataItem)) {
			return fallbackString
		}
		return dataItem
	}

	filters.dateAsNumeric = (dayInput, monthInput, yearInput) => {
		let queryDate = Date.parse(
			`${dayInput} ${filters.month(monthInput)} ${yearInput} 12:00:00 GMT`
		)
		queryDate = new Date(queryDate)
		if (isValidDate(queryDate)) {
			return queryDate.getTime()
		} else {
			return false
		}
	}

	filters.isWithinThreeMonths = (nowInput, dayInput, monthInput, yearInput) => {
		let nowDate = new Date(nowInput)
		let threeMonthsAgo = nowDate.setMonth(nowDate.getMonth() - 3)
		let queryDate = Date.parse(
			`${dayInput} ${filters.month(monthInput)} ${yearInput} 12:00:00 GMT`
		)
		queryDate = new Date(queryDate)
		if (isValidDate(nowDate) && isValidDate(queryDate)) {
			return queryDate > threeMonthsAgo
		} else {
			return false
		}
	}

	filters.redirect = (location) => {
		return `<script>window.location.href = '${location}';</script>`
	}

	filters.oneDecimalPlace = (number) => Math.round(number * 10) / 10

	filters.areasAsGovOptions = (areaArray, location, selectedIds) => {
		if (Array.isArray(areaArray)) {
			return areaArray.map((area) => {
				var labelText = area.label
				if (area.distance == 0) {
					labelText += ` - directly affects ${location}`
				} else {
					if (area.hasDistance) {
						let distanceInMiles = filters.oneDecimalPlace(area.distance)
						labelText += ` - ${distanceInMiles == '1.0' ? '1 mile' : `${distanceInMiles} miles`
							} away`
					} else {
						labelText += ` - less than 2.0 miles away`
					}
				}
				var isChecked = false
				if (Array.isArray(selectedIds)) {
					isChecked = selectedIds.includes(area.notation)
				}
				return {
					text: labelText,
					hint: { text: area.description },
					value: area.notation,
					checked: isChecked,
				}
			})
		} else {
			return []
		}
	}

	filters.removingArea = (areaIds, idToRemove) => {
		if (Array.isArray(areaIds)) {
			return areaIds.filter((areaId) => {
				return areaId != idToRemove
			})
		}
	}

	filters.asArray = (str) => {
		const outputArray = JSON.parse(str)
		if (Array.isArray(outputArray)) {
			return outputArray
		} else {
			return []
		}
	}

	filters.warningAreas = (areas) => {
		if (Array.isArray(areas)) {
			return areas.filter((area) => {
				return area.notation.includes('FW')
			})
		}
	}

	filters.alertAreas = (areas) => {
		if (Array.isArray(areas)) {
			return areas.filter((area) => {
				return area.notation.includes('WA')
			})
		}
	}

	filters.warningAreaIds = (areaIds) => {
		if (Array.isArray(areaIds)) {
			return areaIds.filter((areaId) => {
				return areaId.includes('FW')
			})
		}
	}

	filters.alertAreaIds = (areaIds) => {
		if (Array.isArray(areaIds)) {
			return areaIds.filter((areaId) => {
				return areaId.includes('WA')
			})
		}
	}

	filters.isWarningArea = (area) => {
		return area.notation.includes('FW')
	}

	filters.areaType = (area) => {
		let typeURLs = area.type

		for (const url of typeURLs) {
			if (url.includes('FloodWarningArea')) {
				return 'warning'
			}
			if (url.includes('FloodAlertArea')) {
				return 'alert'
			}
		}
	}

	filters.dateAddingHours = (dateString, hours) => {
		var date = new Date(dateString)
		date.setTime(date.getTime() + hours * 60 * 60 * 1000)
		return date
	}

	filters.regionsAsTableRows = (regions, href) => {
		var outputArray = []

		var regionArray = Object.values(regions)

		regionArray.sort((regionA, regionB) => {
			var nameA = regionA.name.toUpperCase() // ignore upper and lowercase
			var nameB = regionB.name.toUpperCase() // ignore upper and lowercase
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}

			// names must be equal
			return 0
		})

		for (region of regionArray) {
			outputArray.push([
				{
					html:
						'<a href="' +
						href +
						'?selected-region=' +
						region.name +
						'">' +
						region.name +
						'</a>',
				},
				{
					text: region.alertsInForce,
					format: 'numeric',
					attributes: {
						'data-sort-value': region.alertsInForce,
					},
				},
				{
					text: region.warningsInForce,
					format: 'numeric',
					attributes: {
						'data-sort-value': region.warningsInForce,
					},
				},
				{
					text: region.severeWarningsInForce,
					format: 'numeric',
					attributes: {
						'data-sort-value': region.severeWarningsInForce,
					},
				},
			])
		}
		return outputArray
	}

	filters.regionSituationArray = (region) => {
		var allAreas = region.warningAreas.concat(region.alertAreas)
		allAreas = allAreas.filter((area) => area.issueDate)
		allAreas.sort((areaA, areaB) => {
			return new Date(areaA.updateDate) - new Date(areaB.updateDate)
		})
		return allAreas
	}

	filters.dueLabel = (actionDate, nowDate) => {
		const timeInterval =
			new Date(actionDate).getTime() - new Date(nowDate).getTime()
		const isOverdue = timeInterval < 0
		const hours = Math.abs(
			Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		)
		const minutes = Math.abs(
			Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60))
		)
		return `${isOverdue ? '<span class="app-danger-text">Overdue by' : '<span>In'
			} ${hours} ${hours == 1 ? 'hr' : 'hrs'} ${minutes} ${minutes == 1 ? 'min' : 'mins'
			}</span>`
	}

	filters.dueLabelStandalone = (actionDate, nowDate) => {
		const timeInterval =
			new Date(actionDate).getTime() - new Date(nowDate).getTime()
		const isOverdue = timeInterval < 0
		const hours = Math.abs(
			Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		)
		const minutes = Math.abs(
			Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60))
		)
		return `${isOverdue
			? '<span class="app-danger-text">Update or removal overdue by'
			: '<span>Update or removal due in'
			} ${hours} ${hours == 1 ? 'hr' : 'hrs'} ${minutes} ${minutes == 1 ? 'min' : 'mins'
			}</span>`
	}

	filters.situationTableRows = (situationArray, href, nowDate) => {
		var rows = []

		for (area of situationArray) {
			const maxAreaNameCharacters = 999
			var shortenedAreaName = ''

			if (area.label.length <= maxAreaNameCharacters) {
				shortenedAreaName = area.label
			} else {
				shortenedAreaName =
					area.label.slice(0, maxAreaNameCharacters) + '&hellip;'
			}

			rows.push([
				{
					html:
						'<a class="govuk-!-margin-right-2" href="' +
						href +
						'&area-code=' +
						area.notation +
						'&ta-type=' +
						area.type +
						'">' +
						area.notation +
						'</a> <br> <span class="app-table-area-name">' +
						shortenedAreaName + '</span>',
					attributes: {
						'data-sort-value': area.notation,
					},
				},
				{
					html: area.isSevere
						? `<strong class="govuk-tag govuk-tag--red">severe</strong>`
						: area.type == 'warning'
							? `<strong class="govuk-tag govuk-tag--yellow">${area.type}</strong>`
							: `<strong class="govuk-tag govuk-tag--blue">${area.type}</strong>`,
					attributes: {
						'data-sort-value': area.isSevere ? `severe` : area.type,
					},
				},
				// {
				// 	text: `${filters.getTime(area.issueDate)} ${filters.friendlyDate(
				// 		area.issueDate
				// 	)}`,
				// 	attributes: {
				// 		'data-sort-value': new Date(area.issueDate).getTime(),
				// 	},
				// },
				{
					html: `${filters.dueLabel(
						area.updateDate,
						nowDate
					)}<br><span class="govuk-hint">(${filters.getTime(area.updateDate)} ${filters.friendlyDate(
						area.updateDate
					)})</span>`,
					attributes: {
						'data-sort-value': new Date(area.updateDate).getTime(),
					},
				},
			])
		}

		return rows
	}

	filters.areasGroupedByCounty = (areasArray) => {
		var counties = {}

		for (area of areasArray) {
			var county = area.county
			var existsInObject = counties[county]

			if (!existsInObject) {
				counties[county] = [area]
			} else {
				counties[county].push(area)
			}
		}

		return counties
	}

	filters.colorForTag = (tag) => {
		switch (tag) {
			case 'tidal':
				return 'purple'
			case 'fluvial':
				return 'turquoise'
			case 'coastal':
				return 'pink'
			case 'groundwater':
				return 'grey'
			default:
				return 'blue'
		}
	}

	function string_to_slug(str) {
		str = str.replace(/^\s+|\s+$/g, '') // trim
		str = str.toLowerCase()

		// remove accents, swap ñ for n, etc
		var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
		var to = 'aaaaeeeeiiiioooouuuunc------'
		for (var i = 0, l = from.length; i < l; i++) {
			str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
		}

		str = str
			.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
			.replace(/\s+/g, '-') // collapse whitespace and replace by -
			.replace(/-+/g, '-') // collapse dashes

		return str
	}

	filters.nameAsSlug = (name) => {
		return string_to_slug(name)
	}

	/* ------------------------------------------------------------------
	add your methods to the filters obj below this comment block:
	@example:

	filters.sayHi = function(name) {
		return 'Hi ' + name + '!'
	}

	Which in your templates would be used as:

	{{ 'Paul' | sayHi }} => 'Hi Paul'

	Notice the first argument of your filters method is whatever
	gets 'piped' via '|' to the filter.

	Filters can take additional arguments, for example:

	filters.sayHi = function(name,tone) {
	  return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
	}

	Which would be used like this:

	{{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
	{{ 'Gemma' | sayHi }} => 'Hi Gemma!'

	For more on filters and how to write them see the Nunjucks
	documentation.

  ------------------------------------------------------------------ */

	/* ------------------------------------------------------------------
	keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
	return filters
}
