import unsplashPhotos from './unsplashPhotos';

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
  weatherKeys.forEach((weatherItem) => {
    const DOM = document.getElementById(weatherItem);
    DOM.textContent = weatherObject[weatherItem];
  });
};

const updateWeatherIcons = (weatherDescription) => {
  const weatherLowerCase = weatherDescription.toLowerCase();
  const weatherIconLarge = document.getElementById('weatherIconLarge');
  const weatherIconSmall = document.getElementById('weatherIconSmall');
  const image = './images/' + weatherLowerCase + '.svg';
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

const updateBackground = async (weatherObject) => {
  const linearGradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67))';
  const query = weatherObject.location;
  const unsplash = await unsplashPhotos(query);
  const background = document.getElementById('background');
  const description = document.getElementById('photoDescription');
  const imageLink = document.getElementById('image-link');
  background.style.backgroundImage =
    linearGradient + ", url('" + unsplash.image + "')";
  description.textContent = unsplash.description;
  imageLink.href = unsplash.link;
};

const updateDOM = async (promise) => {
  const response = await promise;
  Promise.all([
    Promise.resolve(updateWeather(response)),
    Promise.resolve(updateBackground(response)),
  ]).then(() => {
    hideLoader();
  });
};

export { showLoader, updateDOM };
