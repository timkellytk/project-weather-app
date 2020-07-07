import getWeatherData from './getWeather';
import { updateWeather, hideLoader } from './updateDOM';

getWeatherData('sydney').then((response) => {
  updateWeather(response);
  hideLoader();
});
