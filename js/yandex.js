ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758628, 37.601985],
    zoom: 16
  });


  var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/123.png',
    iconImageSize: [20, 20],
});



var myMap_2 = new ymaps.Map("map_2", {
  center: [55.758628, 37.601985],
  zoom: 16
});


var myPlacemark_2 = new ymaps.Placemark([55.758463, 37.601079], {}, {
  iconLayout: 'default#image',
  iconImageHref: 'img/123.png',
  iconImageSize: [20, 20],
});
  myMap.geoObjects.add(myPlacemark);
  myMap_2.geoObjects.add(myPlacemark_2);
}




