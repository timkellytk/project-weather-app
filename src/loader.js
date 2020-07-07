import './css/loader.css'

const loadLoader = () => {
	const fullScreen = document.createElement('div')
	fullScreen.classList.add('full-screen')
	fullScreen.setAttribute('id', 'loader')
	const spinner = document.createElement('div')
	spinner.classList.add('spinner')
	const doubleBounce1 = document.createElement('div')
	doubleBounce1.classList.add('double-bounce1')
	const doubleBounce2 = document.createElement('div')
	doubleBounce2.classList.add('double-bounce2')
	const loadingText = document.createElement('p')
	loadingText.textContent = "Loading..."

	spinner.appendChild(doubleBounce1)
	spinner.appendChild(doubleBounce2)
	fullScreen.appendChild(spinner)
	fullScreen.appendChild(loadingText)

	const weather = document.getElementById('weather')
	return weather.appendChild(fullScreen)
}

const getLoader = () => {
	return document.getElementById('loader')
}

const showLoader = () => {
	const loader = getLoader();
	return loader.style.display = 'flex'
}

const hideLoader = () => {
	const loader = getLoader();
	return loader.style.display = 'none'
}

export { loadLoader, showLoader, hideLoader }