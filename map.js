console.log("map.js ...");

let markersArray = [];
let map = L.map('map').setView([43.6326, -111.7716], 10);
let parkIcon = L.icon({
	iconUrl: 'lib/img/park-15.svg',
	iconSize: [24, 24],
	iconAnchor: [12, 22],
	popupAnchor: [0, -24]
})


L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

// for (let i = 0; i < cities.length; i++) {
// 	L.marker([cities[i].lat, cities[i].lng]).addTo(map);
// }


// for (let i = 0; i < citiesCoordinates.length; i++) {
// 	// markersArray.push(L.marker(citiesCoordinates[i]).addTo(map));
// 	markersArray[i] = new L.marker(citiesCoordinates[i]).addTo(map);
// }

// for (let i = 0; i < cities.length; i++) {
// 	markersArray[i] = L.marker([cities[i].lat, cities[i].lng])
// 		.bindPopup(`<h2>This is ${cities[i].name}!</h2>`)
// 		.addTo(map);
// } 


// for (let i = 0; i < cities.length; i++) {
// 	L.marker([cities[i].lat, cities[i].lng])
// 		.bindPopup(`
// 			<div>
// 				<h2>This is ${cities[i].name}!</h2>
// 				<img src=${cities[i].img}  alt="stock photo" width="200px" height="100px">
// 			</div>
// 		`) 
// 		.on('click', function () {
// 			this._shadow.style.backgroundColor = 'yellow'
// 			setTimeout(() => {
// 				this.remove()
// 			}, 2000);
// 		})
// 		.addTo(map);
// } 


// for (let i = 0; i < cities.length; i++) {
// 	markersArray[i] = L.marker([cities[i].lat, cities[i].lng]).addTo(map);
// }

// let popup = (city) => L.popup({
// 	minWidth: 250
// }).setContent(`
// 	<div>
// 		<h2>This is ${city.name}!</h2>
// 		<img src=${city.img}  alt="stock photo" width="200px" height="100px">
// 	</div>
// `);

// markersArray.forEach((a, i) => a.bindPopup(popup(cities[i])));


for (let i = 0; i < cities.length; i++) {
	markersArray[i] = L.marker([cities[i].lat, cities[i].lng], { icon: parkIcon, color: 'green' }).addTo(map);
}

let popup = (city) => L.popup({
	minWidth: 250
}).setContent(`
	<div>
	<img src=${city.img}  alt="stock photo" width="200px" height="100px">
	<a href=${city.url}><h2>This is ${city.name}!</h2></a>
	</div>
`);

markersArray.forEach((a, i) => a.bindPopup(popup(cities[i])));

var polyline = new L.polyline(ccoords).addTo(map);