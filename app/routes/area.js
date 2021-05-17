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

router.post('/search', (req, res) => {
	const areaCodeQuery = req.session.data['area-code'] || ''
	const successURL = '/create-message/area-details'
	const errorURL = '/create-message/area-code'

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