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
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetail.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      } else if (json.base === "stations") {
        const imagem = document.getElementById("imagem");
        const temperatura = document.querySelector("temperature");
        if (json.weather[0].description === "overcast clouds") {
          imagem.src = "images/cloud.png";
          imagem.style.width = "30%";
          container.style.height = "400px";
          weatherBox.style.display = "none";
          weatherBox.style.display = "block";
          weatherBox.classList.add("fadeIn");

          weatherBox.style.display = "none";
          weatherBox.style.display = "block";
          weatherBox.classList.add("fadeIn");
        }
      }
    });
});
