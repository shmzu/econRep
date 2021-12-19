$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 3000,
    max: 30000,
    from: 3000,
    to: 23000,
});


const menuBurger = document.querySelector('.burger-menu'),
      menu = document.querySelector('.mobile-menu'),
      menuClose = document.querySelector('.mobile-menu__close'),
      widgetShowMore = document.querySelectorAll('.widget__title'),
      mobileShowMore = document.querySelectorAll('.mobile-menu__title'),
      filterReset = document.querySelector('.catalog__filter-reset'),
      mobileFilterReset = document.querySelector('.mobile-filter__button-reset'),
      checkBox = document.querySelectorAll('.checkbox__real'),
      radioBox = document.querySelectorAll('.radio-button__real'),
      colorPickReset = document.querySelectorAll('.radio-button__filter-close'),
      mobileFilterApply = document.querySelector('.mobile-filter__button-apply'),   
      filterButton = document.querySelector('.filter-mobile__filter'),
      filterCatalog = document.querySelector('.catalog__main-filter'),
      bodyCheck = document.querySelector('#body'),
      showMoreCard = document.querySelector('.btn-more'),
      hiddenCards = document.querySelectorAll('.catalog__card--hidden');
      
menuBurger.addEventListener('click', () => {
    bodyCheck.classList.add('no-scroll');
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    bodyCheck.classList.remove('no-scroll');
    menu.classList.remove('active');
});

widgetShowMore.forEach(function (item) {

    item.addEventListener('click', function () {
        item.classList.toggle('widget__title--active');
        this.nextElementSibling.classList.toggle('hidden');
    });
});

mobileShowMore.forEach(function (item) {
    
    item.addEventListener('click', function () {
        this.classList.toggle('mobile-menu__title--active');
        this.nextElementSibling.classList.toggle('hidden');
    });
});

filterReset.addEventListener('click', function () {

    checkBox.forEach(function (item) {
        item.checked = false;
    });

    radioBox.forEach(function (item) {
        item.checked = false;
    });

});

mobileFilterReset.addEventListener('click', function () {

    checkBox.forEach(function (item) {
        item.checked = false;
    });

    radioBox.forEach(function (item) {
        item.checked = false;
    });

});

filterButton.addEventListener('click', () => {
    bodyCheck.classList.add('no-scroll');
    filterCatalog.classList.add('visible');
    filterReset.classList.add('hidden');
});

mobileFilterApply.addEventListener('click', () => {
    bodyCheck.classList.remove('no-scroll');
    filterCatalog.classList.remove('visible');
});

showMoreCard.addEventListener('click', () => {
    hiddenCards.forEach(function (card) {
        card.classList.remove('catalog__card--hidden');
    });
    showMoreCard.classList.add('hidden');
});