const api_key = "41a07ceb7069aa84f7d8742195eb0115";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
   const response =await fetch(apiUrl + city +`&appid=${api_key}`)   
   if(!response.ok){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
 }
 else{
      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./weather-app-images/clouds.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./weather-app-images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./weather-app-images/drizzle.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./weather-app-images/clear.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./weather-app-images/mist.png";
      }
      document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none";
 
 }
   
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})
searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});