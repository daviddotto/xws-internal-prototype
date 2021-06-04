const express = require('express')
const router = express.Router()

const AWS = require('aws-sdk')
const Fs = require('fs')

const filters = require('../filters')(process.env)

const Polly = new AWS.Polly({
	signatureVersion: 'v4',
	region: 'eu-west-1',
})

router.post('/generate', (req, res) => {
	const inputText = req.body.text
	const fileName = req.body.fileName

	let pollyParameters = {
		Text: inputText,
		OutputFormat: 'mp3',
		VoiceId: 'Amy',
		Engine: 'neural',
	}

	Polly.synthesizeSpeech(pollyParameters, (err, data) => {
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
	const inputText = req.body.text
	res.send(applyPronunciations(inputText, req.session.data.pronunciations))
})

const applyPronunciations = (input, pronunciations) => {
	const inputText = input.toLowerCase()

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
	return {
		text: outputText,
		usedPronunciations,
	}
}

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

router.post('/generate-ivr-message', (req, res) => {
	const telephoneMessageText = getTelephoneMessage(
		req.session.data.area,
		req.session.data['spoken-message'],
		req.session.data.pronunciations,
		req.session.data['severity'] == 'Severe warning'
	)

	let pollyParameters = {
		Text: telephoneMessageText,
		OutputFormat: 'mp3',
		VoiceId: 'Amy',
		Engine: 'neural',
	}

	Polly.synthesizeSpeech(pollyParameters, (err, data) => {
		if (err) {
			res.send(err)
		} else {
			if (data.AudioStream instanceof Buffer) {
				const url = `/tmp/ivr_message_preview.mp3`
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

router.post('/generate-urgent-message', (req, res) => {
	const urgentMessage =
		req.session.data['add-urgent-message'] == 'Yes'
			? req.session.data['urgent-spoken-message']
			: ' '

	const urgentMessageText = getUrgentTelephoneMessage(
		req.session.data.area,
		urgentMessage,
		req.session.data.pronunciations,
		req.session.data['severity'] == 'Severe warning'
	)

	let pollyParameters = {
		Text: `<speak>${urgentMessageText}</speak>`,
		OutputFormat: 'mp3',
		VoiceId: 'Amy',
		Engine: 'neural',
		TextType: 'ssml',
	}

	Polly.synthesizeSpeech(pollyParameters, (err, data) => {
		if (err) {
			res.send(err)
		} else {
			if (data.AudioStream instanceof Buffer) {
				const url = `/tmp/urgent_message_preview.mp3`
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

const getUrgentTelephoneMessage = (
	area,
	messageContent,
	pronunciations,
	isSevere
) => {
	const areaType = area.type
	var headerContent = ''
	var footerContent = ''
	if (areaType == 'alert') {
		headerContent = `
		A Flood Alert has been issued by the Environment Agency. 
		Flood Alert in force, ${area.label}.   
		Flooding is possible for, ${area.description}. 
		Be prepared.
		`
		footerContent = `
		For more detailed information <break strength="weak"/>, please visit the Flood Information Service paige, on the GOV dot UK website, or, call Floodline <break strength="weak"/> on <say-as interpret-as="telephone">0345, 988, 11, 88</say-as> <break strength="weak"/> using quickdial number <break strength="weak"/> <prosody rate="-20%"><say-as interpret-as="telephone">${area.quickDialNumber}</say-as></prosody> <break strength="weak"/>. The Floodline number again is <break strength="weak"/> <say-as interpret-as="telephone">0345, 988, 11, 88</say-as>.  
		To repeat. Flood Alert in force, ${area.label}.
		Press, 1 to acknowledge this message.      
		`
	}
	if (areaType == 'warning') {
		if (isSevere) {
			headerContent = `
			A Severe Flood Warning has been issued by the Environment Agency. 
			Severe Flood Warning in force, ${area.label}.   
			Severe flooding is expected for, ${area.description}. 
			Danger to life. 
			`
			footerContent = `
			For more detailed information <break strength="weak"/>, please visit the Flood Information Service paige, on the GOV dot UK website, or, call Floodline <break strength="weak"/> on <say-as interpret-as="telephone">0345, 988, 11, 88</say-as> <break strength="weak"/> using quickdial number <break strength="weak"/> <prosody rate="-20%"><say-as interpret-as="telephone">${area.quickDialNumber}</say-as></prosody> <break strength="weak"/>. The Floodline number again is <break strength="weak"/> <say-as interpret-as="telephone">0345, 988, 11, 88</say-as>.  

			To repeat. Severe Flood Warning in force, ${area.label}. 

			Press, 1 to acknowledge this message.     
			`
		} else {
			headerContent = `
			A Flood Warning has been issued by the Environment Agency. 
			Flood Warning in force, ${area.label}.   
			Flooding is expected for, ${area.description}. 
			Immediate action required. 
			`
			footerContent = `
			For more detailed information <break strength="weak"/>, please visit the Flood Information Service paige, on the GOV dot UK website, or, call Floodline <break strength="weak"/> on <say-as interpret-as="telephone">0345, 988, 11, 88</say-as> <break strength="weak"/> using quickdial number <break strength="weak"/> <prosody rate="-20%"><say-as interpret-as="telephone"></say-as>${area.quickDialNumber}</prosody> <break strength="weak"/>. The Floodline number again is <break strength="weak"/> <say-as interpret-as="telephone">0345, 988, 11, 88</say-as>.  

			To repeat. Flood Warning in force, ${area.label}.

			Press, 1 to acknowledge this message. 
			`
		}
	}
	const fullMessage = `${headerContent} ${messageContent} ${footerContent}`
	const fullMessageWithPronunciations = applyPronunciations(
		fullMessage,
		pronunciations
	).text
	return fullMessageWithPronunciations
}

const getTelephoneMessage = (
	area,
	messageContent,
	pronunciations,
	isSevere
) => {
	const areaType = area.type
	const date = new Date()
	const dateString = `${date.toDateString()} at ${date.toLocaleTimeString([], {
		hour12: true,
		hour: '2-digit',
		minute: '2-digit',
	})}`
	var headerContent = ''
	var footerContent = ''
	if (areaType == 'alert') {
		headerContent = `
		This message was issued on ${dateString}. 
		A Flood Alert has been issued by the Environment Agency. 
		Flood Alert in force, ${area.label}.   
		Flooding is possible for, ${area.description}. 
		Be prepared.
		`
		footerContent = `
		Be prepared to protect yourself, family, pets and property.    
		Monitor local water levels and weather conditions. 
		Get ready to act on your flood plan, if you have one.  
		Consider moving your car or other vehicles to higher ground if it is safe to do so. 
		Prepare a flood kit of essential items, including, a torch, with spare batteries, mobile phone and charger, warm clothes, home insurance documents, water, food, first aid kit, and any prescription medicines, or baby care items you may need. 
		Check that you know how to turn off your gas, electricity and water mains supplies. 
		In rural locations, farmers should consider moving livestock and equipment away from areas likely to flood. 
		Avoid walking, cycling or driving through flood water. Thirty centimetres of fast-flowing water can move a car, and 6 inches can knock an adult off their feet.  
		Flood water is dangerous, and may be polluted. Wash your hands thoroughly, if you’ve been in contact with it. 


		This message will be updated as the situation changes.
		`
	}
	if (areaType == 'warning') {
		if (isSevere) {
			headerContent = `
			This message was issued on ${dateString}. 
			A Severe Flood Warning has been issued by the Environment Agency. 
			Severe Flood Warning in force, ${area.label}.   
			Severe flooding is expected for, ${area.description}. 
			Danger to life. 
			`
			footerContent = `
			Act on your flood plan now, if you have one.  
			Move family, pets and valuables to a safe place.    
			Move your car or other vehicles to higher ground, if it is safe to do so. 
			Take action to prevent water entering your property. Any flood protection equipment should be professionally supplied and installed to help reduce the impact of flood water.   
			You may need to leave your property, so pack a bag with enough items for a few nights away. Pack essential items, including, a torch with spare batteries, mobile phone and charger, warm clothes, home insurance information, water, food, first aid kit, and any prescription medicines, or baby care items you may need.   
			Turn off gas, electricity and water mains supplies, be4 flood water starts to enter your property. Never touch an electrical switch if you are standing in water.  
			Listen to the advice of the emergency services, and be ready to evacuate your property if told to do so. 
			Avoid walking, cycling or driving through flood water. Thirty centimetres of fast-flowing water can move a car, and 6 inches can knock an adult off their feet.  
			Flood water is dangerous, and may be polluted. Wash your hands thoroughly, if you’ve been in contact with it.  
			
			This message will be updated as the situation changes. 
			`
		} else {
			headerContent = `
			This message was issued on ${dateString}. 
			A Flood Warning has been issued by the Environment Agency. 
			Flood Warning in force, ${area.label}.   
			Flooding is expected for, ${area.description}. 
			Immediate action required. 
			`
			footerContent = `
			Act on your flood plan now, if you have one.  
			Move family, pets and valuables to a safe place.    
			Move your car or other vehicles to higher ground, if it is safe to do so. 
			Take action to prevent water entering your property. Any flood protection equipment should be professionally supplied and installed to help reduce the impact of flood water.   
			You may need to leave your property, so pack a bag with enough items for a few nights away. Pack essential items, including, a torch with spare batteries, mobile phone and charger, warm clothes, home insurance information, water, food, first aid kit, and any prescription medicines, or baby care items you may need.   
			Turn off gas, electricity and water mains supplies, be4 flood water starts to enter your property. Never touch an electrical switch if you are standing in water.  
			Listen to the advice of the emergency services, and be ready to evacuate your property if told to do so. 
			Avoid walking, cycling or driving through flood water. Thirty centimetres of fast-flowing water can move a car, and 6 inches can knock an adult off their feet.  
			Flood water is dangerous, and may be polluted. Wash your hands thoroughly, if you’ve been in contact with it.  
			
			This message will be updated as the situation changes. 
			`
		}
	}
	const fullMessage = `${headerContent} ${messageContent} ${footerContent}`
	const fullMessageWithPronunciations = applyPronunciations(
		fullMessage,
		pronunciations
	).text
	return fullMessageWithPronunciations
}

module.exports = router
