const express = require('express')
const router = express.Router()

const axios = require('axios')

const filters = require('../filters')(process.env)

function getAreaType(area) {
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

router.all('/search', (req, res) => {
	const areaCodeQuery = req.session.data['area-code'] || ''
	const successURL = req.session.data['next-page']
	const errorURL = req.session.data['error-page']

	if (areaCodeQuery.trim().length > 0) {
		const queryURL = `https://environment.data.gov.uk/flood-monitoring/id/floodAreas/${areaCodeQuery}`

		axios
			.get(queryURL)
			.then((response) => {
				var data = response.data

				var area = data.items

				area.polygon = filters.secure(area.polygon)

				axios
					.get(area.polygon)
					.then((response) => {
						const polygonData = response.data

						area.polygonData = polygonData
						area.type = getAreaType(area)

						const currentRegion = req.session.data['selected-region']
						const currentTaType = req.session.data['ta-type']
						var areaArray = []
						areaArray =
							currentTaType == 'warning'
								? req.session.data.regions[currentRegion].warningAreas
								: req.session.data.regions[currentRegion].alertAreas
						var matchedAreas = []
						matchedAreas = areaArray.filter((a) => a.notation == areaCodeQuery)
						const savedArea = matchedAreas.length > 0 ? matchedAreas[0] : {}

						area = Object.assign(savedArea, area)

						req.session.data.area = area

						res.redirect(successURL)
					})
					.catch((errors) => {
						console.log('Polygon fetch error', errors)
					})
			})
			.catch((error) => {
				console.log('Error', error.message)
				res.redirect(errorURL)
			})
	} else {
		// No code entered
		res.redirect(errorURL)
	}
})

module.exports = router
