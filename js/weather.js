let iconElement = document.querySelector(".weather-icon");
let descripElement = document.querySelector(".description p");
let tempElement = document.querySelector(".temperature p");
let locationElement = document.querySelector(".location p");
let notiElement = document.getElementById("notification");

let apiKey = "8e2da3f69f71ee19847e463ac6313b04";

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    notiElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function showError(error) {
    notiElement.innerHTML = `<p>${error.message}</p>`;
}

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeatherInfo(latitude, longitude);
};

let getWeatherInfo = (latitude, longitude) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`, {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            value = Math.floor(data.main.temp - 273);
            icon = data.weather[0].icon;
            description = data.weather[0].description;
            city = data.name;
            country = data.sys.country;
        })
        .then(() => displayWeatherInfo())
}

let displayWeatherInfo = () => {
    iconElement.innerHTML = `<img class="icon" src="img/${icon}@2x.png"/>`;
    tempElement.innerHTML = `${value}°<span>C</span>`;
    descripElement.innerHTML = description;
    locationElement.innerHTML = `${city}, ${country}`;
}