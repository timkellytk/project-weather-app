import print from './print.js'
import './style.css'

const createText = (string) => {
	const div = document.createElement('div')
	const text = document.createElement('p')
	text.textContent = string
	div.appendChild(text)
	return document.body.appendChild(div)
}

print()

createText('This is a weather app')