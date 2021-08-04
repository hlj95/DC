const weatherUL = document.getElementById("weather")
const addLocButton = document.getElementById("addLocButton")
const cityName = document.getElementById("cityName")

addLocButton.addEventListener('click', function() {
    const city = cityName.value
    getWeatherInfo(city)
})

function getWeatherInfo(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44bd3dd297f5ca104a3ad3f1dc1714d2&units=imperial`)
        .then(response => {
            return response.json()
        }).then(result => {
            console.log(result)
            displayWeather(result)
        }).catch(error => {
            console.log(error)
        })
}

function displayWeather(weather) {
    const todaysWeather = weather.main
    const weatherInfo = ` <li id="todaysWeather"><h2>${weather.name}</h2></li> 
        <li>Current Temperature : ${todaysWeather.temp} °F </li> 
        <li>Today's Low :  ${todaysWeather.temp_min} °F</li>
        <li>Today's High : ${todaysWeather.temp_max} °F</li> 
        <li>Pressure :  ${todaysWeather.pressure} </li>`
    weatherUL.innerHTML = weatherInfo
}

getWeatherInfo(function(result) {
    displayWeather(result)
})


