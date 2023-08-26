import "./styles.css";
const getWeather = require("./api");
const dom = require("./dom");

dom.dom();
const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
searchBtn.addEventListener("click", () => {
  console.log("click");
  getWeather.checkWeather(searchBox.value);
});
