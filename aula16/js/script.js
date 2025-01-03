const search = document.querySelector(".search-box button");
const container = document.querySelector(".container");
const weatherBox = document.querySelector(".weather-box");
const weatherDetail = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  console.log("Carregar dados");

  const APIKey = "6798be00aca7b5ad944f1bcb1bb4b30b";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      if (json.cod === 404 || json.cod === 401) {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetail.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";

      // Atualize os elementos com os dados do JSON
      const imagem = document.getElementById("imagem");
      const temperature = document.getElementById("temperature");
      const description = document.getElementById("description");
      const humidity = document.getElementById("humidity");
      const wind_speed = document.getElementById("wind_speed");

      imagem.src = getWeatherIcon(json.weather[0].main); // Função para ícones
      temperature.innerHTML = `${Math.round(json.main.temp)}°`;
      description.innerHTML = json.weather[0].description;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind_speed.innerHTML = `${json.wind.speed} Km/h`;

      container.style.height = "500px";
      weatherBox.style.display = "block";
      weatherBox.classList.add("fadeIn");
      weatherDetail.classList.add("fadeIn");
    });
});

function getWeatherIcon(weather) {
  // Associe as descrições do clima a imagens
  const icons = {
    Clouds: "images/cloud.png",
    Clear: "images/clear.png",
    Rain: "images/rain.png",
    Snow: "images/snow.png",
    Drizzle: "images/drizzle.png",
    Thunderstorm: "images/thunderstorm.png",
    Default: "images/default.png",
  };
  return icons[weather] || icons.Default;
}
