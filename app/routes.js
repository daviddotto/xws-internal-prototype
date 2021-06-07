const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.all('*', (req, res, next) => {
	req.session.data.currentDate = new Date()
	next()
})

const textToSpeechRoutes = require('./routes/text-to-speech')
router.use('/text-to-speech', textToSpeechRoutes)

const areaRoutes = require('./routes/area')
router.use('/area', areaRoutes)

module.exports = router
