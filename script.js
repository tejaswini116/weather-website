function getWeather() {
    const apiKey = "2794c7526007b13357e67f41066a026a";
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                document.getElementById("weatherResult").innerHTML =
                    `Temperature: ${temp}°C<br>Weather: ${description}`;
            } else {
                document.getElementById("weatherResult").innerHTML = "City not found";
            }
        })
        .catch(() => {
            document.getElementById("weatherResult").innerHTML = "Error fetching data";
        });
}
