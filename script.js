// enter website 
// enter city 
// press button (combine function)
// api calls for weather data 
// weather data is displayed 
var weatherApiKey = "883f353f6e06551f30c9aba3bab1545f";
function getWeather(city) {
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + weatherApiKey + "&units=imperial";
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + weatherApiKey + "&units=imperial";

    $.ajax({
    url:queryURL,
    method:"GET"
    }).then(function(response) {
        console.log(response);
        $("#currentTemp").text(response.main.temp)
    })

    $.ajax({
        url:fiveDayURL,
        method: "GET"
    }).then(function(fiveDayRes){
        console.log(fiveDayRes);
        for(i=0; i<fiveDayRes.list.length; i+=8){
            console.log(fiveDayRes.list[i].main.temp)
            //0,8,16,24,32
            $("#index-"+i).text(fiveDayRes.list[i].main.temp)
        }
    })
}
$("#search-button").on("click", function() {
    var city = $("#search-value").val();
    console.log(city);
    getWeather(city);
    });
    