// OpenWeatherMap API URL
const apiKey = '0cf2ecc3c7283521edd59b65a0bda874';

function getWeather() {
    const city = document.getElementById('city').value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }
            displayWeather(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temp');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const weatherInfo = document.querySelector('.weather-info');

    cityName.textContent = data.name;
    temp.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherInfo.style.display = 'block';
}
