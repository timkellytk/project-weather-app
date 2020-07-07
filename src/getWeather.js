import { showLoader } from './loader'
import moment from 'moment'

const localTimeConverter = (sec) => {
	const date = new Date(sec * 1000);
	return moment(date).format('LT')
}

const getWeatherData = async (userInput) => {
	showLoader();
	const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=7c19479f21a089bc2821f199dacb7a19&units=metric')
	const data = await response.json()
	const weather = {
		location: data.name,
		description: data.weather[0].main,
		time: moment().format('h:mm a'),
		temp: Math.round(data.main.temp),
		feelsLike: Math.round(data.main.feels_like),
		wind: Math.round(data.wind.speed),
		tempMin: Math.round(data.main.temp_min),
		tempMax: Math.round(data.main.temp_max),
		humidity: data.main.humidity,
		sunrise: localTimeConverter(data.sys.sunrise),
		sunset: localTimeConverter(data.sys.sunset),
	}
	return weather
}

export default getWeatherData
