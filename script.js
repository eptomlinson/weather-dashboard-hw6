// enter website 
// enter city 
// press button (combine function)
// api calls for weather data 
// weather data is displayed 
var apiKey = "883f353f6e06551f30c9aba3bab1545f";
function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + apiKey;
    $.ajax({
    url:queryURL,
    method:"GET"
    }).then(function(response) {
        console.log(response);
    })
}
$("#search-button").on("click", function() {
    var city = $("#city-input").val();
    console.log(city);
    getWeather(city);
    })