var map = L.map('map').setView([-23.4251, -51.9382], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-23.4000, -51.9000]).addTo(map).bindPopup('Lar e Amor');
var marker2 = L.marker([-23.4200, -51.8900]).addTo(map).bindPopup('Coração Solidário');
var marker3 = L.marker([-23.4300, -51.9200]).addTo(map).bindPopup('Ajudar Sempre');
var marker4 = L.marker([-23.4400, -51.8800]).addTo(map).bindPopup('Mãos Amigas');
var marker5 = L.marker([-23.4500, -51.9300]).addTo(map).bindPopup('Esperança Viva');
var marker6 = L.marker([-23.4000, -51.9300]).addTo(map).bindPopup('Sorriso Solidário');
var marker7 = L.marker([-23.4300, -51.9600]).addTo(map).bindPopup('Paz e Bem');
var marker8 = L.marker([-23.4100, -51.9525]).addTo(map).bindPopup('Casa da Fraternidade');