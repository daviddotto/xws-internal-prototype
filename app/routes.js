const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const textToSpeechRoutes = require('./routes/text-to-speech')
router.use('/text-to-speech', textToSpeechRoutes)

const areaRoutes = require('./routes/area')
router.use('/area', areaRoutes)

module.exports = router
