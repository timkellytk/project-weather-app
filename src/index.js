import moment from 'moment'
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

const localTimeConverter = (sec) => {
	const date = new Date(sec * 1000);
	return moment(date).format('LT')
}

fetch('http://api.openweathermap.org/data/2.5/weather?q=sydney&appid=7c19479f21a089bc2821f199dacb7a19&units=metric')
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		const weather = {
			name: response.name,
			description: response.weather[0].main,
			date: moment().format('MMMM Do YYYY, h:mm a'),
			temp: response.main.temp,
			wind: response.wind.speed,
			humidity: response.main.humidity,
			tempMin: response.main.temp_min,
			tempMax: response.main.temp_max,
			sunrise: localTimeConverter(response.sys.sunrise),
			sunset: localTimeConverter(response.sys.sunset),
		}
		return console.log(weather)
	})
	.catch(function (err) {
		console.log(err)
	});

createText('This is a weather app')