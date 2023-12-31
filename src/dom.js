const img = require("./image");

export function dom() {
  const card = document.createElement("div");
  card.className = "card";
  document.body.appendChild(card);

  //Search Bar
  const search = document.createElement("div");
  search.className = "search";
  card.appendChild(search);
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "enter city");
  searchInput.setAttribute("spellcheck", false);
  const searchBtn = document.createElement("button");
  const image = img.createImg("magnify.png", "searchBtn");
  search.appendChild(searchInput);
  search.appendChild(searchBtn);
  searchBtn.innerHTML = image;

  //Error message
  const error = document.createElement("div");
  error.className = "error";
  error.textContent = "Invalid Entry";
  card.appendChild(error);

  //Weather Info
  const weather = document.createElement("div");
  weather.className = "weather";
  weather.innerHTML = img.createImg("clear-sky.png", "weather-icon");
  card.appendChild(weather);
  const temp = document.createElement("h1");
  temp.className = "temp";
  temp.textContent = "68 °F";
  weather.appendChild(temp);
  const city = document.createElement("h2");
  city.textContent = "New York City";
  city.className = "city";
  weather.appendChild(city);

  //Weather Deatils
  const details = document.createElement("div");
  details.className = "details";
  weather.appendChild(details);
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = img.createImg("humidity.png", "humidity-icon");
  const humidityInfo = document.createElement("div");
  col.appendChild(humidityInfo);
  const humidityText = document.createElement("p");
  humidityText.textContent = "50%";
  humidityText.className = "humidity";
  const humiditySub = document.createElement("p");
  humiditySub.textContent = "Humidity";
  humidityInfo.appendChild(humidityText);
  humidityInfo.appendChild(humiditySub);
  col.appendChild(humidityInfo);
  details.appendChild(col);
  const col2 = document.createElement("div");
  col2.className = "col";
  col2.innerHTML = img.createImg("wind.png", "wind-icon");
  const windyText = document.createElement("p");
  windyText.textContent = "15 mph";
  windyText.className = "windy";
  const windySub = document.createElement("p");
  windySub.textContent = "Wind Speed";
  const windInfo = document.createElement("div");
  windInfo.appendChild(windyText);
  windInfo.appendChild(windySub);
  col2.appendChild(windInfo);
  details.appendChild(col2);
}
