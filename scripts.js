// JavaScript para inicializar el mapa
var map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var bacteriaData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-77.0369, 38.9072]
            },
            "properties": {
                "name": "MRSA Outbreak",
                "popupContent": "Washington D.C., USA"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [2.3522, 48.8566]
            },
            "properties": {
                "name": "VRE Outbreak",
                "popupContent": "Paris, France"
            }
        }
    ]
};

L.geoJSON(bacteriaData, {
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    }
}).addTo(map);
