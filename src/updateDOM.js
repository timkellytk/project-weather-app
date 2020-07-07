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
  };
  const weatherKeys = Object.keys(updatedObject);
  weatherKeys.map((weatherItem) => {
    const DOM = document.getElementById(weatherItem);
    DOM.textContent = updatedObject[weatherItem];
  });
  const weatherIconLarge = document.getElementById('weatherIconLarge');
  const weatherIconSmall = document.getElementById('weatherIconSmall');
  const image = './images/' + weatherObject.description + '.svg';
  weatherIconLarge.src = image;
  weatherIconSmall.src = image;
};

export { showLoader, hideLoader, updateWeather };
