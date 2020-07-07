const getLoader = () => {
  return document.getElementById('loader');
};

const showLoader = () => {
  const loader = getLoader();
  return (loader.style.display = 'flex');
};

const hideLoader = () => {
  const loader = getLoader();
  return (loader.style.display = 'none');
};

const updateWeather = (weatherObject) => {
  const updatedObject = {
    ...weatherObject,
    temp: weatherObject.temp + '°C',
    feelsLike: 'Feels like ' + weatherObject.feelsLike + '°C',
    wind: weatherObject.wind + ' km/h',
    humidity: weatherObject.humidity + '% humidity',
    sunset: 'Sunset at ' + weatherObject.sunset,
  };
  const weatherKeys = Object.keys(updatedObject);
  weatherKeys.map((weatherItem) => {
    const DOM = document.getElementById(weatherItem);
    DOM.textContent = updatedObject[weatherItem];
  });
};

export { showLoader, hideLoader, updateWeather };
