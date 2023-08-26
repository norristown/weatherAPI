const getWeather = require("./getWeather");
export async function checkWeather(city) {
  const apiKey = "1a958c20fc9465e8ef2c3dcbf82e0bcd";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
  const responseCity = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var dataCity = await responseCity.json();

  if (/^\d+$/.test(city)) {
  } else {
    getWeather.getWeather(responseCity, dataCity);

    console.log(dataCity);
  }
}
