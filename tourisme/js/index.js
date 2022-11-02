var map = L.map('map').setView([49.4295387, 2.0807123], 13);

var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

OpenStreetMap_DE.addTo(map);


var url = "https://api.openweathermap.org/data/2.5/weather?q=Beauvais&units=metric&appid=279b4be6d54c8bf6ea9b12275a567156";

$.ajax({
	type: "GET",
	url: url,
	dataType: "json",
	success: function (retour) {
		$("#msgmeteo").text(retour.main.temp + "°C");
	},
	error: function () {
		alert("PB avec l'URL");
	}
});
