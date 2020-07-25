var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([77.1025, 28.7041]),
    rotation: Math.PI / 6,
    zoom: 10
    
  })
});