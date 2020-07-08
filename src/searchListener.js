import getWeather from './getWeather';
import { updateDOM } from './updateDOM';
import algoliaPlaces from './algoliaPlaces';

const searchListener = () => {
  const search = document.getElementById('search');
  const searchBtn = document.getElementById('searchBtn');

  const searchLocation = () => {
    const input = search.value;
    updateDOM(getWeather(input));
    return (search.value = '');
  };

  algoliaPlaces(search, searchLocation);
  return searchBtn.addEventListener('click', searchLocation);
};

export default searchListener;
