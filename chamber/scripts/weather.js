document.addEventListener('DOMContentLoaded', () => {
    const forecastContainer = document.querySelector('#forecast-container');
    const weatherIconToday = document.querySelector('#weather-icon-today');
    const lat = -23.27;
    const lon = -46.75;
    const apiKey = '0f8b3b88198771a951f0ceacc78f784b';
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    async function fetchForecast() {
        try {
            const response = await fetch(forecastUrl);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                displayForecast(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    function displayForecast(data) {
        forecastContainer.innerHTML = '';
        const currentDate = new Date();
        const threeDayForecast = [];

        data.list.forEach(entry => {
            const forecastDate = new Date(entry.dt * 1000);
            const isSameDay = forecastDate.getDate() === currentDate.getDate();

            if (isSameDay) {
                const iconCode = entry.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
                weatherIconToday.src = iconUrl;
            }

            const daysDifference = Math.ceil((forecastDate - currentDate) / (1000 * 60 * 60 * 24));

            if (daysDifference > 0 && daysDifference < 3) {
                const forecastExists = threeDayForecast.some(forecast => forecast.dt.getDate() === forecastDate.getDate());

                if (!forecastExists) {
                    threeDayForecast.push({
                        dt: forecastDate,
                        temperature: entry.main.temp,
                        description: entry.weather[0].description
                    });
                }
            }
        });

        threeDayForecast.forEach(entry => {
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');

            const dateElement = document.createElement('p');
            dateElement.textContent = entry.dt.toDateString();

            const tempElement = document.createElement('p');
            tempElement.textContent = `Temperature: ${entry.temperature} °C`;

            const descElement = document.createElement('p');
            descElement.textContent = `Description: ${entry.description}`;

            forecastElement.appendChild(dateElement);
            forecastElement.appendChild(tempElement);
            forecastElement.appendChild(descElement);

            forecastContainer.appendChild(forecastElement);
        });
    }

    fetchForecast();
});
