// enter website 
// enter city 
// press button (combine function)
// api calls for weather data 
// weather data is displayed 
var apiKey = "8c2e95818c2adf53f3a3c8bd87b93476";
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