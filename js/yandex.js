ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.760216, 37.628595],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });


  var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Subtract.png',
    iconImageSize: [28, 40],
});
  myMap.geoObjects.add(myPlacemark);
}
