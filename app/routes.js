const express = require('express')
const router = express.Router()

const filters = require('./filters')(process.env)

const axios = require('axios')

// Add your routes here - above the module.exports line

router.all('*', (req, res, next) => {
	req.session.data.currentDate = new Date()
	if (!req.session.data.regions) {
		const queryURL = `https://environment.data.gov.uk/flood-monitoring/id/floodAreas?_limit=5000`
		axios
			.get(queryURL)
			.then((response) => {
				var data = response.data
				var areas = data.items

				var outputObject = {
					regions: {},
				}

				for (var area of areas) {
					var region = outputObject.regions[area.eaAreaName]
					if (!region) {
						region = {
							name: area.eaAreaName,
							alertAreas: [],
							warningAreas: [],
							alertsInForce: 0,
							warningsInForce: 0,
						}
						outputObject.regions[area.eaAreaName] = region
					}

					const taCode = area.notation

					// Get TA type
					const typeCode = taCode.substring(3, 5)

					const taType = typeCode == 'FW' ? 'warning' : 'alert'

					// Get tags

					const tagCode = taCode.substring(5, 6)

					var taTags = []

					switch (tagCode) {
						case 'F':
							taTags.push('fluvial')
							break
						case 'C':
							taTags.push('coastal')
							break
						case 'T':
							taTags.push('tidal')
							break
						case 'G':
							taTags.push('groundwater')
							break
						case 'B':
							taTags.push('tidal')
							taTags.push('fluvial')
							break
						default:
							taTags.push('Not applicable')
							break
					}

					area.tags = taTags
					area.type = taType

					if (area.type == 'warning') {
						region.warningAreas.push(area)
					} else {
						region.alertAreas.push(area)
					}
				}

				// Set dummy in-force warnings

				var totalAlerts = 0
				var totalWarnings = 0
				var totalSevereWarnings = 0

				for (var regionName in outputObject.regions) {
					var region = outputObject.regions[regionName]
					const numberOfDummyAlerts = Math.floor(Math.random() * (15 - 4) + 4)
					for (let i = 0; i < numberOfDummyAlerts; i++) {
						var randomIndex = Math.floor(
							Math.random() * region.alertAreas.length
						)
						var issueDate = filters.randomDate(0.6)
						var updateDate = new Date(issueDate.getTime() + 1000 * 60 * 60 * 12)
						outputObject.regions[regionName].alertAreas[randomIndex] = {
							...outputObject.regions[regionName].alertAreas[randomIndex],
							issueDate,
							updateDate,
						}
					}
					const numberOfDummyWarnings = Math.floor(Math.random() * (4 - 1) + 1)
					for (let i = 0; i < numberOfDummyWarnings; i++) {
						var randomIndex = Math.floor(
							Math.random() * region.warningAreas.length
						)
						var issueDate = filters.randomDate(0.4)
						var updateDate = new Date(issueDate.getTime() + 1000 * 60 * 60 * 8)
						outputObject.regions[regionName].warningAreas[randomIndex] = {
							...outputObject.regions[regionName].warningAreas[randomIndex],
							issueDate,
							updateDate,
							isSevere: Math.floor(Math.random() * 50) > 40,
						}
					}
					outputObject.regions[regionName].alertsInForce =
						region.alertAreas.reduce(
							(count, area) => (area.issueDate ? count + 1 : count),
							0
						)
					totalAlerts =
						totalAlerts + outputObject.regions[regionName].alertsInForce
					outputObject.regions[regionName].warningsInForce =
						region.warningAreas.reduce(
							(count, area) => (area.issueDate ? count + 1 : count),
							0
						)
					totalWarnings =
						totalWarnings + outputObject.regions[regionName].warningsInForce
					outputObject.regions[regionName].severeWarningsInForce =
						region.warningAreas.reduce(
							(count, area) => (area.isSevere ? count + 1 : count),
							0
						)
					totalSevereWarnings =
						totalSevereWarnings +
						outputObject.regions[regionName].severeWarningsInForce
				}
				req.session.data.totalAlerts = totalAlerts
				req.session.data.totalWarnings = totalWarnings
				req.session.data.totalSevereWarnings = totalSevereWarnings
				req.session.data.regions = outputObject.regions
				next()
			})
			.catch((error) => {
				console.log('Error', error.message)
				req.session.data.regions = error
				next()
			})
	} else {
		next()
	}
})

const textToSpeechRoutes = require('./routes/text-to-speech')
router.use('/text-to-speech', textToSpeechRoutes)

const areaRoutes = require('./routes/area')
router.use('/area', areaRoutes)

const templateProcessingRoutes = require('./routes/template-processing')
router.use('/template-processing', templateProcessingRoutes)

module.exports = router
