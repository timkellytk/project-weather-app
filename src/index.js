import getWeatherData from './getWeather';
import searchListener from './searchListener';
import { updateDOM } from './updateDOM';

updateDOM(getWeatherData('sydney'));

searchListener();
