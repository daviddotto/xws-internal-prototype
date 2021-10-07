const express = require('express')
const router = express.Router()

const axios = require('axios')

const filters = require('../filters')(process.env)


// Apply template tags to the content
router.post('/fetch', (req, res) => {

	let content = req.body.content
	let asPreview = req.body.asPreview

	res.send(filters.templateToContent(content, req.session.data.area, asPreview))

})

module.exports = router
