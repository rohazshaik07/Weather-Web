let searchButton = document.querySelector('.input-button');
let inputBox = document.querySelector('.input-area');
let humidity = document.getElementById('Humidity');
let windspeed = document.getElementById('windspeed');
let temperature = document.querySelector('.temperature');
let about = document.querySelector('.short-des');
let weatherImage = document.querySelector('.Imagee');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.Weather-main');

async function checkWeather(city) {
    const api_key = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherData = await fetch(url).then(response => response.json());

    if (weatherData.cod === '404') {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }

    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`;
    about.innerHTML = `${weatherData.weather[0].description}`;

    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windspeed.innerHTML = `${weatherData.wind.speed} km/h`;

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImage.src = "Images/Images__6.png"; 
            break;
        case 'Clear':
            weatherImage.src = "Images/Images__3.png"; 
            break;
        case 'Rain':
            weatherImage.src = "Images/Images__4.png"; 
            break;
        case 'Mist':
            weatherImage.src = "Images/Images__2.png"; 
            break;
        case 'Snow':
            weatherImage.src = "Images/Images__5.png"; 
            break;
    }
}

searchButton.addEventListener('click', () => {
    const city = inputBox.value;
    checkWeather(city);
});
