const getImg = require("./image");

export function getWeather(response, data) {
  const weatherIcon = document.querySelector(".weather-icon");
  if (response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.innerHTML = getImg.createImg("cloud.png");
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.innerHTML = getImg.createImg("clear-sky.png");
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.innerHTML = getImg.createImg("dark-and-stormy.png");
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.innerHTML = getImg.createImg("dark-and-stormy.png");
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + "MPH";
  }
}
