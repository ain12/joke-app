const button = document.getElementById("button");
const joke = document.getElementById("joke-content");
const url = "https://icanhazdadjoke.com/";
const urlChuck = "https://api.chucknorris.io/jokes/random";

button.addEventListener("click", getJoke = () => {
    const randomNumber = 100 * Math.random();
    return randomNumber > 50 ? getDadJoke() : getChuckJoke();
}
);

const getDadJoke = () => {
    fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(data => joke.innerHTML = data.joke)
}

const getChuckJoke = () => {
    fetch(urlChuck, {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(data => joke.innerHTML = data.value)
}

