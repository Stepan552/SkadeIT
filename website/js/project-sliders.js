// // const slides = document.querySelectorAll('.slider__image');
// const slider = document.querySelector('.slider');
// const indicators = document.querySelectorAll('.slider__indicator');
// const cardsWrapper = document.querySelector('.projects-demonstration__wrapper');
// const countSlides = document.querySelectorAll(
//   '#slider-1 .slider__slide'
// ).length; // дістаємо кількість слайдів в одному слайдері, так як інші ідентичні
// let slideIndex = 0;
// let intervalId = null;
// let isIntervalRunning = false;
// let sliderWidth = slider.offsetWidth;

// indicators.forEach((indicator) =>
//   indicator.addEventListener('click', changeSlide)
// );

// function scrollNextAll() {
//   const sliders = document.querySelectorAll('.slider');
//   slideIndex++;
//   if (slideIndex > countSlides - 1) slideIndex = 0;
//   sliders.forEach((slider) => {
//     const currentIndicator = document.querySelector(
//       `#${slider.id} .slider__indicator_${slideIndex}`
//     );
//     rollDefinedSlider(slider.id);
//     changeActiveIndicator(slider.id, currentIndicator);
//   });
// }

// window.addEventListener('scroll', () => {
//   if (checkInViewport(cardsWrapper)) {
//     if (!isIntervalRunning) {
//       isIntervalRunning = true;
//       intervalId = setInterval(scrollNextAll, 4000);
//     }
//   } else {
//     isIntervalRunning = false;
//     clearInterval(intervalId);
//   }
// });

// window.addEventListener('resize', defineSliderSizes);

// function changeSlide(event) {
//   // Отримуємо ідентифікатор слайдера, на чий індикатор був здійснений клік (так, як наявні 3 слайдери)
//   let currentSliderId =
//     event.target.parentElement.parentElement.getAttribute('id');
//   const indicatorClass = event.target.getAttribute('class');
//   slideIndex = indicatorClass[indicatorClass.search(/\d/)]; //  в індикаторах наявні класи, з яких можна витягнути їх індекс
//   if (event.target.getAttribute('class').includes('slider__indicator_active')) {
//     return;
//   } else {
//     isIntervalRunning = false;
//     clearInterval(intervalId);

//     changeActiveIndicator(currentSliderId, event.target);
//     rollDefinedSlider(currentSliderId);
//   }
// }

// function changeActiveIndicator(currentSliderId, currentIndicator) {
//   const activeIndicator = document.querySelector(
//     `#${currentSliderId} .slider__indicator_active`
//   );
//   activeIndicator.classList.remove('slider__indicator_active');
//   currentIndicator.classList.add('slider__indicator_active');
// }

// function rollDefinedSlider(currentSliderId) {
//   const sliderImages = document.querySelector(
//     `#${currentSliderId} .slider__slides`
//   );
//   sliderImages.style.transform = `translateX(${-sliderWidth * slideIndex}px)`;
// }

const slidersKeyWords = ['first', 'second', 'third'];
const slidersStartFunctions = [
  playProjectFirstSlider,
  playProjectSecondSlider,
  playProjectThirdSlider,
];
let projectSliders = [];
for (let i = 0; i < 3; i++) {
  const projectSliderInfo = {
    slider: document.querySelector(`.project-${slidersKeyWords[i]}-slider`),
    slides: document.querySelectorAll(
      `.project-${slidersKeyWords[i]}-slider__slide`
    ),
    currentSlideIndex: 0,
    indicatorsSelector: `.project-${slidersKeyWords[i]}-slider__indicator`,
    activeIndicatorClass: `project-${slidersKeyWords[i]}-slider__indicator_active`,
    countSlides: document.querySelectorAll(
      `.project-${slidersKeyWords[i]}-slider__slide`
    ).length,
    sliderWidth: document.querySelector(`.project-${slidersKeyWords[i]}-slider`)
      .offsetWidth,
    /* Селектори слайдера для функції адаптиву defineSliderSizes */
    sliderSelector: `.project-${slidersKeyWords[i]}-slider`,
    slidesBox: document.querySelector(
      `.project-${slidersKeyWords[i]}-slider__slides`
    ),
    sliderImages: document.querySelectorAll(
      `.project-${slidersKeyWords[i]}-slider__image`
    ),
    /* ------------------ */

    slidesBoxSelector: `.project-${slidersKeyWords[i]}-slider__slides`,
    isIntervalRunning: false,
    intervalId: null,
    startFunction: slidersStartFunctions[i],
  };
  projectSliders.push(projectSliderInfo);
  defineSliderSizes(projectSliderInfo);
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', resizeHandler);
function playProjectFirstSlider() {
  scrollNext(projectSliders[0]);
}

function playProjectSecondSlider() {
  scrollNext(projectSliders[1]);
}

function playProjectThirdSlider() {
  scrollNext(projectSliders[2]);
}

function scrollHandler() {
  for (let i = 0; i < projectSliders.length; i++) {
    controlIntervalProcess(projectSliders[i]);
  }
}
function resizeHandler() {
  for (let i = 0; i < projectSliders.length; i++) {
    defineSliderSizes(projectSliders[i], 1.43);
  }
}

for (let i = 0; i < projectSliders.length; i++) {
  makeSwitchingIndicatorsManually(projectSliders[i], changeSlideByInd);
}

function changeSlideByInd(sliderClass, indicatorIndex) {
  projectSliders.forEach((sliderInfo) => {
    if (sliderInfo.slider.getAttribute('class') === sliderClass) {
      sliderInfo.currentSlideIndex = indicatorIndex;
      rollHorizontalSlider(sliderInfo);
      changeIndicator(sliderInfo);
    }
  });
}
