// Инициализируем Swiper
let myImageSlider = new Swiper(".image-slider", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    /*
	 // Буллеты
	 type:'bullets', //по умолчанию
    clickable: true,
    //  Динамические буллеты
    dynamicBullets: true,
    //  Кастомные буллеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
*/

    // Фракция
    type: "fraction",
    //  Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
      return (
        'Фото <span class="' +
        currentClass +
        '"></span>' +
        " из " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },

    /*
    // Прогрессбар
    type: "progressbar",
	 */
  },
  //   Скролл
  scrollbar: {
    el: ".swiper-scrollbar",
    // возможность перетаскивать скролл
    draggable: true,
  },

  //   Включение/отключение
  // перетаскивания на ПК
  simulateTouch: true, //для отключения пишем false
  // Чувствительность свайпа
  touchRatio: 1, //чем выше цифра тем выше чувствительность, 0-отключает
  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: false,

  //   Навигация по хешу
  hashNavigation: {
    // Отслеживать состояние
    watchState: true,
  },

  //   Управление клавиатурой
  keyboard: {
    // Включить/выключить
    enabled: true,
    // Включить/выключить только когда слайдер в пределах вьюпорта
    onlyInViewport: true,

    // Включить/выключить управление клавишами pageUp, pageDown
    pageUpDown: true,
  },

  //   Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором будет срабатывать прокрутка мышью
    //  eventsTarget: ".image-slider",
  },

  //   автовысота
  autoHeight: false,

  // Количество слайдов для показа
  slidesPerView: 3,

  //   Отключение функционала если слайдов меньше чем нужно
  watchOverflow: true,

  //   Отступ между слайдами
  spaceBetween: 30,
  //   Количество пролистываемых слайдов
  slidesPerGroup: 1,

  //   Активный слайд по центру
  centeredSlides: false,

  //   Стартовый слайд
  initialSlide: 0,

  //   Мультирядность
  slidesPerColumn: 1,

  //   Бесконечный слайдер
  loop: false,

  // Кол-во дублирующих слайдов
  loopedSlides: 0,

  //   Свободный режим
  freeMode: true,
  /*
  //   Автопрокрутка
  autoplay: {
    // Пауза между прокруткой
    delay: 1000,
    // Закончить на последнем слайде
    stopOnLastSlide: true,
    // Отключить после ручного переключения
    disableOnInteraction: false,
  },
  */
  //   Скорость переключения слайдов
  speed: 800,

  // Вертикальный слайдер
  direction: "horizontal",

  //   Эффекты переключения слайдов:
  // листание
  //   effect: "slide", //по умолчанию

  /*
  //   смена прозрачности
  effect: "fade",

  // дополнения к fade
  fadeEffect: {
    // параллельная смена прозрачности
    crossFade: true,
  },
  */

  //   //   Переворот
  //   effect: "flip",

  //   // дополнения к flip
  //   flipEffect: {
  //     // Тень
  //     slideShadows: true,
  //     // Показ только активного слайда
  //     limitRotation: true,
  //   },

  //   Куб
  //   effect: "cube",

  //   // дополнения к cube
  //   cubeEffect: {
  //     // Настройка тени
  //     slideShadows: true,
  //     shadow: true,
  //     shadowOffset: 20,
  //     shadowScale: 0.94,
  //   },

  //Эффект потока
  //   effect: "coverflow",
  //   // Дополнение к coverflow
  //   coverflowEffect: {
  //     // Угол
  //     rotate: 20,
  //     // Наложение
  //     stretch: 50,
  //     //   Тень
  //     slideShadows: true,
  //   },
  // Брейк поинты (адаптив)
  // Ширина экрана
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //     },
  //     480: {
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //     },
  //   },

  //   Соотношение сторон
  //   breakpoints: {
  //     "@0.75": {
  //       slidesPerView: 1,
  //     },
  //     "@1.00": {
  //       slidesPerView: 2,
  //     },
  //     "@1.50": {
  //       slidesPerView: 3,
  //     },
  //   },

  //   Отключить предзагрузку картинок
  preloadImages: false,
  // Lazy Loading (подгрузка картинок)
  lazy: {
    // Подгрузка на старте переключения слайда
    loadOnTransitionStart: false,
    // Подгрузить предыдущую и следующие картинки
    loadPrevNext: false,
  },
  //   Слежка за видимыми слайдами
  watchSlidesProgress: true,
  //   Добавление класса видимым слайдам
  watchSlidesVisibility: true,

  //   Зум картинки
  zoom: {
    // Максимальное увеличение
    maxRatio: 2,
    // Минимальное увеличение
    minRatio: 1,
  },

  //   Миниатюры (превью)
  //   thumbs: {
  //     // Свайпер с миниатюрами и его настройки
  //     swiper: {
  //       el: ".image-mini-slider",
  //       slidesPerView: 5,
  //     },
  //   },
  // Передача управления
  //   controller: {
  //     control: myTextSlider,
  //   },

  // Обновить свайпер при изменении элементов слайдера (например в табах)
  observer: true,
  // Обновить свайпер при изменении родительских элементов слайдера
  observeParents: true,
  // Обновить свайпер при изменении дочерних элементов слайдера
  observeSlideChildren: true,

  //   Виртуальные слайды
  // Формирование слайдера
  //   virtual: {
  //     slides: (function () {
  //       let slide = [];
  //       for (let i = 0; i < 500; i++) {
  //         slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
  //       }
  //       return slide;
  //     })(),
  //   },

  //   Доступность (для слабовидящих и т. п.)
  ally: {
    // Включить/выключить
    enabled: true,
    // Сообщения
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next Slide",
    firstSlideMessage: "This is the first slide",
    lastSlideMessage: "This is the last slide",
    paginationBulletMessage: "Go to slide {{index}}",
    notificationClass: "swiper-notification",
    containerMessage: "",
    containerRoleDescriptionMessage: "",
    iteRoleDescriptionMessage: "",
    // и т. д.
  },
});

// Cлайдер в слайдере
new Swiper(".image-in-slider", {
  // Курсор перетаскивания
  grabCursor: true,
  // Навигация, пагинация, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    // буллеты
    clickable: true,
  },
  //   Корректная работа перетаскивания\свайпа для дочернего слайдера
  nested: true,
});

// Текстовый слайдер
let myTextSlider = new Swiper(".text-slider", {
  // Количество слайдов для показа
  slidesPerView: 3,
  // Отступ между слайдами
  spaceBetween: 30,
});

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;

// Параллакс слайдер
new Swiper(".parallax-slider", {
  // Включаем параллакс
  parallax: true,
  // Скорость переключения
  speed: 2000,
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Запуск автопрокрутки при наведении мыши
let sliderBlock = document.querySelector(".image-slider");

sliderBlock.addEventListener("mouseenter", function (e) {
  myImageSlider.params.autoplay.disableOnInteraction = false;
  myImageSlider.params.autoplay.delay = 500;
  myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
  myImageSlider.autoplay.stop();
});

let mySliderAllSlides = document.querySelector(".image-slider__total");
let mySliderCurrentSlide = document.querySelector(".image-slider__current");

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on("slideChange", function () {
  let currentSlide = ++myImageSlider.realIndex;
  mySliderCurrentSlide.innerHTML = currentSlide;
});
