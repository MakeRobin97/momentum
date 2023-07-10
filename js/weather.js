
const API_KEY ="ee9be15356e687c6f0c5046fb9abced2";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in ", lat, lon)
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL).then(response => response.json()).then(data => {
     const weather = document.querySelector("#weather span:first-child");
     const city = document.querySelector("#weather span:last-child");
     weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`
     city.innerText = data.name; 
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);