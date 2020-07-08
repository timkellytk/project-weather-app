import { showLoader } from './updateDOM';

const getWeatherData = async (userInput) => {
  showLoader();
  const cityArray = userInput.split(',');
  const city = cityArray[0];
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&appid=7c19479f21a089bc2821f199dacb7a19&units=metric';
  const response = await fetch(url);
  const data = await response.json();
  const weather = {
    location: data.name,
    description: data.weather[0].main,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    wind: Math.round(data.wind.speed),
    humidity: data.main.humidity,
  };
  return weather;
};

export default getWeatherData;
