console.log("map.js ...");

var map = L.map('map').setView([43.6326, -111.7716], 10);

L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

// for (let i = 0; i < cities.length; i++) {
// 	L.marker([cities[i].lat, cities[i].lng]).addTo(map);
// }

for (let i = 0; i < citiesCoordinates.length; i++) {
	L.marker(citiesCoordinates[i]).addTo(map);
}

