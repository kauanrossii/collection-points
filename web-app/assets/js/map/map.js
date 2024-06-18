var map = L.map('map').setView([-23.4251, -51.9382], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

(async function populateMap() {
    const response = await fetch("http://localhost:3000/collection-point");
    const collectionPoints = await response.json();
    collectionPoints.forEach(collectionPoint => {
        L.marker([collectionPoint.x, collectionPoint.y]).addTo(map).bindPopup(collectionPoint.organization.name);
    });
})();