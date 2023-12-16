document.addEventListener('DOMContentLoaded', () => {
    const weatherIcon = document.getElementById('weather-icon');
    const currentTemp = document.getElementById('currentTemp');
    const currentHumidity = document.getElementById('currentHumidity');
    const nextDayTemp = document.getElementById('nextDayTemp');
    const nextDayForecast = document.getElementById('nextDayForecast');
    const lat = -20.46;
    const lon = -86.93;
    const apiKey = '0f8b3b88198771a951f0ceacc78f784b';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    async function fetchWeather() {
        try {
            // Fetch current weather data
            const currentResponse = await fetch(currentWeatherUrl);
            const forecastResponse = await fetch(forecastUrl);

            if (currentResponse.ok && forecastResponse.ok) {
                const currentData = await currentResponse.json();
                const forecastData = await forecastResponse.json();
                
                displayCurrentWeather(currentData);
                displayNextDayForecast(forecastData);
            } else {
                throw Error('Unable to fetch data');
            }
        } catch (error) {
            console.log(error);
        }
    }

    function displayCurrentWeather(data) {
        const iconCode = data.weather[0].icon;
        const desc = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;

        currentTemp.innerHTML = `${temp}&deg;C`;
        currentHumidity.innerHTML = `${humidity}%`;
        weatherDesc.innerHTML = ` ${desc}`;
        
        const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
    }

    function displayNextDayForecast(data) {
        const forecastList = data.list;
        // Assuming the forecast list contains data in 3-hour intervals
        
        // Find the next day's forecast at 15:00 (3:00 PM)
        const nextDayForecastData = forecastList.find(item => {
            const dateTime = new Date(item.dt * 1000);
            return dateTime.getHours() === 15; // Check for 3:00 PM
        });

        if (nextDayForecastData) {
            const nextDayTempValue = nextDayForecastData.main.temp;
            const nextDayDesc = nextDayForecastData.weather[0].description;

            nextDayTemp.innerHTML = `Next Day's Temp (3:00 PM): ${nextDayTempValue}&deg;C`;
            nextDayForecast.innerHTML = `Forecast Next day: ${nextDayDesc}`;
        } else {
            nextDayTemp.innerHTML = 'Forecast data unavailable';
            nextDayForecast.innerHTML = 'Forecast data unavailable';
        }
    }

    fetchWeather();
});

