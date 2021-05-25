import key from './key.js'

const COORDS = 'coords';
const API_KEY = key.API_KEY;

const $weather_span = document.createElement('span');
$weather_span.setAttribute('class', 'js-date');

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => {
            return res.json();
        })
        .then(res => {
            const temp = res.main.temp;
            const place = res.name;
            $weather_span.innerText = `${temp}℃ / ${place}`;
        })
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const coordsObj = {
        lat,
        lon
    };

    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    getWeather(lat, lon);
}

function handleGeoError() {
    console.log('Can\'t load geo location');
}

function getCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem('COORDS')

    if (loadedCoords === null) {
        getCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    const body = document.querySelector('body')
    body.appendChild($weather_span);

    loadCoords();
}

init();