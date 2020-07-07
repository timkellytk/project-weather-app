import getWeatherData from './getWeather'
import { loadLoader, hideLoader } from './loader'

loadLoader()
getWeatherData('sydney').then((response) => {
	console.log(response)
	hideLoader();
})