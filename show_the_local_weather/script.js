const endpoint = 'https://fcc-weather-api.glitch.me/api/current?';

if (navigator.geolocation)
   position = navigator.geolocation.getCurrentPosition(fetchInfoAtPosition);
else
  console.log("doesn't have navigator"); //change later for some real message



function fetchInfoAtPosition (position) 
{  
  let [lat, long] = [position.coords.latitude, position.coords.longitude];
  
  fetch(endpoint + `lat=${lat}&lon=${long}`)
    .then(function(response) {
      return response.json();
    })
    .then(jsonData => {
      console.log(jsonData);
      DisplayWeatherData(jsonData);
     });  
}


function DisplayWeatherData (weatherData)
{
  document.querySelector('#temperature').innerText = weatherData.main.temp;
  document.querySelector('#min-temperature').innerText = weatherData.main.temp_min;
  document.querySelector('#max-temperature').innerText = weatherData.main.temp_max;
}
