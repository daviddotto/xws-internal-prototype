const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const textToSpeechRoutes = require('./routes/text-to-speech')
router.use('/text-to-speech', textToSpeechRoutes)

module.exports = router
