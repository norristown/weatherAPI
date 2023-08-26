const getWeather = require("./getWeather");
export async function checkWeather(city) {
  const apiKey = "1a958c20fc9465e8ef2c3dcbf82e0bcd";

  if (/^\d+$/.test(city)) {
    const apiUrlZip =
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
    const responseZip = await fetch(apiUrlZip + city + `&appid=${apiKey}`);
    var dataZip = await responseZip.json();
    getWeather.getWeather(responseZip, dataZip);
  } else {
    const apiUrlCity =
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
    const responseCity = await fetch(apiUrlCity + city + `&appid=${apiKey}`);
    var dataCity = await responseCity.json();
    getWeather.getWeather(responseCity, dataCity);
  }
}
