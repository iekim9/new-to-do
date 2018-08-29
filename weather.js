//var url = "http://api.openweathermap.org/data/2.5/weather?q=Irvine,us&units=imperial&APPID=f663c30808c7e0f9c5a7b150087fe2a7";


document.getElementById("weather").innerHTML = currentPos.latitude;

/*
var req = new XMLHttpRequest();
req.open("GET", url, false);
req.send();

var p = JSON.parse(req.response);

//var current_temp = document.write('\xB0');

document.getElementById("weather").innerHTML = p.main.temp + " ";
document.write('\xB0','F');
*/