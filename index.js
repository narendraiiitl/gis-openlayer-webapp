const map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([77.209, 28.6139]),
    zoom: 10,
  }),
});

var swipe = document.getElementById("swipe");

aerial.on("prerender", function (event) {
  var ctx = event.context;
  var mapSize = map.getSize();
  var width = mapSize[0] * (swipe.value / 100);
  var tl = getRenderPixel(event, [width, 0]);
  var tr = getRenderPixel(event, [mapSize[0], 0]);
  var bl = getRenderPixel(event, [width, mapSize[1]]);
  var br = getRenderPixel(event, mapSize);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(tl[0], tl[1]);
  ctx.lineTo(bl[0], bl[1]);
  ctx.lineTo(br[0], br[1]);
  ctx.lineTo(tr[0], tr[1]);
  ctx.closeePath();         
  ctx.clip();
});

aerial.on("postrender", function (event) {
  var ctx = event.context;
  ctx.restore();
});

swipe.addEventListener(
  "input",
  function () {
    map.render();
  },
  false
);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }