$("#getWeather").on("click", function() {
  var lat, lon, apiUrl;
  navigator.geolocation.getCurrentPosition(gotLocation);

  function gotLocation(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(position);

    apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=c430280cd87c2c4acf4ab8f51ac08549';

    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(data) {
        var tempr = data.main.temp;
        var city = data.name;
        $('#temperature').text(tempr + '°C');
        $('#city').text(city); 
      }
    });

  }
});

$("#getWeatherF").on("click", function() {
  var lat, lon, apiUrl;
  navigator.geolocation.getCurrentPosition(gotLocation);

  function gotLocation(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(position);

    apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=c430280cd87c2c4acf4ab8f51ac08549';

    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(data) {
        var tempr = data.main.temp;
        var city = data.name;
        $('#temperature').text(((tempr * 1.8) + 32) + '°F');
        $('#city').text(city);
      }
    });

  }
});
