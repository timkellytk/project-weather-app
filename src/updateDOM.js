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

const updateWeatherText = (weatherObject) => {
  const weatherKeys = Object.keys(weatherObject);
  weatherKeys.map((weatherItem) => {
    const DOM = document.getElementById(weatherItem);
    DOM.textContent = weatherObject[weatherItem];
  });
};

const updateWeatherIcons = (weatherDescription) => {
  const weatherIconLarge = document.getElementById('weatherIconLarge');
  const weatherIconSmall = document.getElementById('weatherIconSmall');
  const image = './images/' + weatherDescription + '.svg';
  weatherIconLarge.src = image;
  weatherIconSmall.src = image;
};

const updateWeather = (weatherObject) => {
  const updatedObject = {
    ...weatherObject,
    temp: weatherObject.temp + '°C',
    feelsLike: 'Feels like ' + weatherObject.feelsLike + '°C',
    wind: weatherObject.wind + ' km/h',
    humidity: weatherObject.humidity + '% humidity',
  };
  updateWeatherText(updatedObject);
  updateWeatherIcons(weatherObject.description);
};

const updateDOM = (promise) => {
  promise.then((response) => {
    updateWeather(response);
    hideLoader();
  });
};

export { showLoader, updateDOM };
