let weather = {
  apikey: "81410efbdf313e12a3bd3956a81bcba2",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    if (data.cod == "200") {
      getweather(data);
    }
    else if (data.cod == "400") {
      noinput(data);
    }
    else{
      citynotfound(data);
    }
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") weather.search();
  });
weather.fetchWeather("Baku");


function getweather(data){
  const { name } = data;
  const { main, description, icon } = data.weather[0];
  const { temp, humidity, temp_min, temp_max, pressure, feels_like} = data.main;
  const { speed, deg } = data.wind;
  // console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".location-city").innerHTML = "Weather in " + name;
  document.querySelector(".icon").style.backgroundImage = "url(https://openweathermap.org/img/wn/" + icon + "@2x.png)";
  document.querySelector(".temperature-degree").innerHTML = "Temperature: " + temp + "°C";
  document.querySelector(".min_temp").innerHTML = "Min Temperature: " + temp_min + "°C";
  document.querySelector(".max_temp").innerHTML = "Max Temperature: " + temp_max + "°C";
  document.querySelector(".feels_real").innerHTML = "Feels real: " + feels_like + "°C";

  document.querySelector(".weather-condition").innerHTML = "Condition: " + main;

  document.querySelector(".weather-description").innerHTML = "Description: " + description;
  document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerHTML = "Wind: " + speed + " km/h";
  document.querySelector(".wind_deg").innerHTML = "Wind degree: " + deg + "°";
  document.querySelector(".pressure").innerHTML = "Pressure: " + pressure + " Pa";

  document.querySelector(".weather ").classList.remove("loading");
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
  document.querySelector(".temperature-degree").style.position = "relative";
  document.querySelector(".temperature-degree").style.visibility = "visible";
  document.querySelector(".max_temp").style.position = "relative";
  document.querySelector(".max_temp").style.visibility = "visible";
  document.querySelector(".min_temp").style.position = "relative";
  document.querySelector(".min_temp").style.visibility = "visible";
  document.querySelector(".feels_real").style.position = "relative";
  document.querySelector(".feels_real").style.visibility = "visible";
  document.querySelector(".humidity").style.position = "relative";
  document.querySelector(".humidity").style.visibility = "visible";
  document.querySelector(".pressure").style.position = "relative";
  document.querySelector(".pressure").style.visibility = "visible";
  document.querySelector(".wind").style.position = "relative";
  document.querySelector(".wind").style.visibility = "visible";
  document.querySelector(".wind_deg").style.position = "relative";
  document.querySelector(".wind_deg").style.visibility = "visible";
}

function noinput(data){
  document.querySelector(".location-city").innerHTML = "Something went wrong!";
  document.querySelector(".temperature-degree").style.position = "absolute";
  document.querySelector(".temperature-degree").style.visibility = "hidden";
  document.querySelector(".weather-condition").style.position = "absolute";
  document.querySelector(".weather-condition").style.visibility = "hidden";
  document.querySelector(".weather-description").style.position = "absolute";
  document.querySelector(".weather-description").style.visibility = "hidden";
  document.querySelector(".max_temp").style.position = "absolute";
  document.querySelector(".max_temp").style.visibility = "hidden";
  document.querySelector(".min_temp").style.position = "absolute";
  document.querySelector(".min_temp").style.visibility = "hidden";
  document.querySelector(".feels_real").style.position = "absolute";
  document.querySelector(".feels_real").style.visibility = "hidden";
  document.querySelector(".humidity").style.position = "absolute";
  document.querySelector(".humidity").style.visibility = "hidden";
  document.querySelector(".pressure").style.position = "absolute";
  document.querySelector(".pressure").style.visibility = "hidden";
  document.querySelector(".wind").style.position = "absolute";
  document.querySelector(".wind").style.visibility = "hidden";
  document.querySelector(".wind_deg").style.position = "absolute";
  document.querySelector(".wind_deg").style.visibility = "hidden";
}

function citynotfound(data){
  document.querySelector(".location-city").innerHTML = "City not found";
  document.querySelector(".temperature-degree").style.position = "absolute";
  document.querySelector(".temperature-degree").style.visibility = "hidden";
  document.querySelector(".weather-condition").style.position = "absolute";
  document.querySelector(".weather-condition").style.visibility = "hidden";
  document.querySelector(".weather-description").style.position = "absolute";
  document.querySelector(".weather-description").style.visibility = "hidden";
  document.querySelector(".max_temp").style.position = "absolute";
  document.querySelector(".max_temp").style.visibility = "hidden";
  document.querySelector(".min_temp").style.position = "absolute";
  document.querySelector(".min_temp").style.visibility = "hidden";
  document.querySelector(".feels_real").style.position = "absolute";
  document.querySelector(".feels_real").style.visibility = "hidden";
  document.querySelector(".humidity").style.position = "absolute";
  document.querySelector(".humidity").style.visibility = "hidden";
  document.querySelector(".pressure").style.position = "absolute";
  document.querySelector(".pressure").style.visibility = "hidden";
  document.querySelector(".wind").style.position = "absolute";
  document.querySelector(".wind").style.visibility = "hidden";
  document.querySelector(".wind_deg").style.position = "absolute";
  document.querySelector(".wind_deg").style.visibility = "hidden";
}
