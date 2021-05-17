const button = document.getElementById("button");
const joke = document.getElementById("joke-content");
const url = " https://icanhazdadjoke.com/";

button.addEventListener("click", getJoke = () => {
    fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(data => joke.innerHTML = data.joke)
});