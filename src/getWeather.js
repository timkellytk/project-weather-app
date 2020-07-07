import { showLoader } from './updateDOM';
import moment from 'moment';

const getWeatherData = async (userInput) => {
  showLoader();
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=' +
      userInput +
      '&appid=7c19479f21a089bc2821f199dacb7a19&units=metric'
  );
  const data = await response.json();
  const weather = {
    location: data.name,
    description: data.weather[0].main,
    time: moment().format('h:mm a'),
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    wind: Math.round(data.wind.speed),
    humidity: data.main.humidity,
  };
  return weather;
};

export default getWeatherData;
