import Unsplash from 'unsplash-js';

const unsplashPhotos = (photoQuery) => {
  const unsplash = new Unsplash({
    accessKey: 'URakoCfM4egzn2Z2Hgh1mMXRmTy8Yr6efetAbac6yow',
  });

  return unsplash.photos
    .getRandomPhoto({ query: photoQuery })
    .then((response) => response.json())
    .then((json) => {
      return {
        image: json.urls.regular,
        description: json.description,
        link: json.links.html,
      };
    });
};

export default unsplashPhotos;
