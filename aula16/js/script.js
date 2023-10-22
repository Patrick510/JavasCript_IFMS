const search = document.querySelector(".search-box button");
const container = document.querySelector(".container");
const weatherBox = document.querySelector(".weather-box");
const weatherDetail = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  console.log("carregar dados");

  const APIKey = "6798be00aca7b5ad944f1bcb1bb4b30b";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(json["main"]["temp"]);
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetail.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      } else if (json.base === "stations") {
        const imagem = document.getElementById("imagem");
        const temperature = document.getElementById("temperature");
        const description = document.querySelector("description");
        if (json.weather[0].description === "overcast clouds") {
          imagem.src = "images/cloud.png";
          temperature.innerHTML = json["main"]["temp"];
          container.style.height = "400px";
          weatherBox.style.display = "none";
          weatherBox.style.display = "block";
          weatherBox.classList.add("fadeIn");
        }
        if (json.weather[0].description === "clear sky") {
          imagem.src = "images/clear.png";
          temperature.innerHTML = json["main"]["temp"];
          console.log(dados["main"]);
          container.style.height = "400px";
          weatherDetail.classList.add("fadeIn");
          weatherBox.classList.add("fadeIn");
        }
        if (json.weather[0].description === "few clouds") {
          imagem.src = "images/clear.png";
          temperature.innerHTML = json["main"]["temp"];
          container.style.height = "400px";
          weatherDetail.classList.add("fadeIn");
          weatherBox.classList.add("fadeIn");
        }
        if (json.weather[0].description === "broken clouds") {
          imagem.src = "images/clear.png";
          temperature.innerHTML = json["main"]["temp"];
          container.style.height = "400px";
          weatherDetail.classList.add("fadeIn");
          weatherBox.classList.add("fadeIn");
        }
        if (json.weather[0].description === "scattered clouds") {
          imagem.src = "images/clear.png";
          temperature.innerHTML = json["main"]["temp"];
          container.style.height = "400px";
          weatherDetail.classList.add("fadeIn");
          weatherBox.classList.add("fadeIn");
        }
      }
    });
});
