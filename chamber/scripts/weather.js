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
        // Limpar o container antes de adicionar novas previsões
        forecastContainer.innerHTML = '';

        const currentDate = new Date();
        const threeDayForecast = [];

        data.list.forEach(entry => {
            const forecastDate = new Date(entry.dt * 1000);
            const isSameDay = forecastDate.getDate() === currentDate.getDate();

            if (isSameDay) {
                // Exibe o ícone do clima de hoje
                const iconCode = entry.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
                weatherIconToday.src = iconUrl;
            }

            // Adiciona somente uma previsão por dia
            if (isSameDay || (forecastDate.getDate() !== currentDate.getDate() && forecastDate.getDate() <= currentDate.getDate() + 3)) {
                if (!threeDayForecast.some(forecast => forecastDate.getDate() === forecast.dt.getDate())) {
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
