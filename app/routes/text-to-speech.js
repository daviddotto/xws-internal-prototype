const express = require('express')
const router = express.Router()

const AWS = require('aws-sdk')
const Fs = require('fs')

// Add your routes here - above the module.exports line

router.post('/generate', (req, res) => {
	const inputText = req.body.text
	const fileName = req.body.fileName

	const Polly = new AWS.Polly({
		signatureVersion: 'v4',
		region: 'eu-west-1',
	})

	let parameters = {
		Text: inputText,
		OutputFormat: 'mp3',
		VoiceId: 'Amy',
		Engine: 'neural',
	}

	Polly.synthesizeSpeech(parameters, (err, data) => {
		if (err) {
			res.send(err)
		} else {
			if (data.AudioStream instanceof Buffer) {
				const url = `/tmp/${fileName || 'message_preview'}.mp3`
				Fs.writeFile(process.cwd() + url, data.AudioStream, function (err) {
					if (err) {
						return console.log(err)
					}
					res.send(url)
				})
			}
		}
	})
})

router.post('/get-pronunciations', (req, res) => {
	const inputText = req.body.text.toLowerCase()

	const pronunciations = req.session.data.pronunciations

	var usedPronunciations = []
	var outputText = inputText

	for (let item of pronunciations) {
		const phraseRegExp = new RegExp('\\b' + item.phrase.toLowerCase() + '\\b')
		if (phraseRegExp.test(inputText)) {
			outputText = outputText.replace(
				phraseRegExp,
				item.pronunciation.toLowerCase()
			)
			usedPronunciations.push(item)
		} else {
			if (item.userInput) {
				usedPronunciations.push(item)
			}
		}
	}

	res.send({
		text: outputText,
		usedPronunciations,
	})
})

router.post('/remove-pronunciation', (req, res) => {
	const inputText = req.body.text.toLowerCase()

	const savedPronunciations = req.session.data.pronunciations

	var processedPronunciations = []

	for (let item of savedPronunciations) {
		const phraseRegExp = new RegExp('\\b' + item.phrase.toLowerCase() + '\\b')
		if (phraseRegExp.test(inputText)) {
			// Item should be removed, don't add to output
		} else {
			processedPronunciations.push(item)
		}
	}

	req.session.data.pronunciations = processedPronunciations

	res.send(true)
})

router.post('/add-pronunciation', (req, res) => {
	const inputPhrase = req.body.phrase
	const inputPronunciation = req.body.pronunciation

	var existingEntryWasModified = false

	const savedPronunciations = req.session.data.pronunciations

	var processedPronunciations = []

	for (let item of savedPronunciations) {
		const phraseRegExp = new RegExp('\\b' + item.phrase.toLowerCase() + '\\b')
		if (phraseRegExp.test(inputPhrase.toLowerCase())) {
			processedPronunciations.push({
				phrase: item.phrase,
				pronunciation: inputPronunciation,
				userInput: true,
			})
			existingEntryWasModified = true
		} else {
			processedPronunciations.push(item)
			existingEntryWasModified = existingEntryWasModified || false
		}
	}

	if (existingEntryWasModified) {
		req.session.data.pronunciations = processedPronunciations
	} else {
		req.session.data.pronunciations.push({
			phrase: inputPhrase,
			pronunciation: inputPronunciation,
			userInput: true,
		})
	}
	res.send(true)
})

router.post('/save-input', (req, res) => {
	const inputText = req.body.text
	const dataName = req.body.name

	req.session.data[dataName] = inputText

	res.send(true)
})

module.exports = router
