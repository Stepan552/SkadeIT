// const slides = document.querySelectorAll('.slider__image');
const slider = document.querySelector('.slider');
const indicators = document.querySelectorAll('.slider__indicator');
const cardsWrapper = document.querySelector('.projects-demonstration__wrapper');
const countSlides = document.querySelectorAll(
  '#slider-1 .slider__slide'
).length; // дістаємо кількість слайдів в одному слайдері, так як інші ідентичні
let slideIndex = 0;
let intervalId = null;
let isIntervalRunning = false;
const widthSlide = slider.offsetWidth;

indicators.forEach((indicator) =>
  indicator.addEventListener('click', changeSlide)
);

function scrollNextAll() {
  const sliders = document.querySelectorAll('.slider');
  slideIndex++;
  if (slideIndex > countSlides - 1) slideIndex = 0;
  sliders.forEach((slider) => {
    const currentIndicator = document.querySelector(
      `#${slider.id} .slider__indicator_${slideIndex}`
    );
    rollDefinedSlider(slider.id);
    changeActiveIndicator(slider.id, currentIndicator);
  });
}

window.addEventListener('scroll', () => {
  if (checkInViewport(cardsWrapper)) {
    if (!isIntervalRunning) {
      isIntervalRunning = true;
      intervalId = setInterval(scrollNextAll, 4000);
    }
  } else {
    isIntervalRunning = false;
    clearInterval(intervalId);
  }
});

function changeSlide(event) {
  // Отримуємо ідентифікатор слайдера, на чий індикатор був здійснений клік (так, як наявні 3 слайдери)
  let currentSliderId =
    event.target.parentElement.parentElement.getAttribute('id');
  const indicatorClass = event.target.getAttribute('class');
  slideIndex = indicatorClass[indicatorClass.search(/\d/)]; //  в індикаторах наявні класи, з яких можна витягнути їх індекс
  if (event.target.getAttribute('class').includes('slider__indicator_active')) {
    return; // якщо був здійснений клік на активний індикатор, не потрібно виконувати ніякі дії
  } else {
    /* коли відбувся клік на будь-який індикатор, зупиняємо автоматичне переключення
     слайдів до повторного скролу в області видимості блока із карточками, щоб дати можливість користувачу
     переглянути слайди */
    isIntervalRunning = false;
    clearInterval(intervalId);

    changeActiveIndicator(currentSliderId, event.target);
    rollDefinedSlider(currentSliderId);
  }
}
function changeActiveIndicator(currentSliderId, currentIndicator) {
  const activeIndicator = document.querySelector(
    `#${currentSliderId} .slider__indicator_active`
  );
  activeIndicator.classList.remove('slider__indicator_active');
  currentIndicator.classList.add('slider__indicator_active');
}
/* currentSliderId містить id слайдера, в рамках якого був клік на його індикатор, за 
 його допомогою дістаємо правильний блок із слайдами для його переміщення по осі X */
function rollDefinedSlider(currentSliderId) {
  const sliderImages = document.querySelector(
    `#${currentSliderId} .slider__slides`
  );
  sliderImages.style.transform = `translateX(${-widthSlide * slideIndex}px)`;
}

/* 
1) Вішаємо на подію click індикаторів обробник changeSlide
2) в рамках changeSlide визначаємо ідентифікатор слайдера, на чий індикатор був здійснений клік
(необхідно спочатку задати всім слайдерам ідентифікатори). Визначаємо індекс індикатора, на якому був клік
(необхідно спочатку призначити всім індикаторам ідентифікатори, які будуть виступати в ролі індексів). 
Робимо умову, якщо був клік на активному індикторі, тоді немає необхідності робити якісь дії. В іншому 
випадку викликаємо функцію, яка змінює активний індикатор та функцію, яка прогортає блок із слайдами. Дані 
функції приймають як аргумент ідентифікатор слайдера, на чий індикатор був клік, щоб визначати в межах якого
слайду працювати 
3) Функція, яка змінює активний індикатор спочатку дістає активний індикатор, видаляє з нього 
клас, який позначає, що цей індикатор являється активним та звертається до поточного індикатора, на якому 
відбувся клік, щоб встановити цей клас йому (просто видаляє та встановлює клас)
4) Функція, яка гортає слайдер влаштована таким чином: дістається блок, в якому знаходяться слайди, 
в рамках слайдера, на чий індикатор був клік. Далі змінюється css властивість transform даного елемента, щоб 
переснути його по осі x вліво на відстань <ширина слайдера * індекс слайда>
*/
