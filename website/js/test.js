let isIntervalRunning = false;
let intervalId = null;
const slider = document.querySelector('slider');

let slideIndex = 0;
const countSlides = document.querySelectorAll('slider__slide').length;

const indicators = document.querySelectorAll('slider__indicator');

const sliderWidth = document.querySelector('slider').offsetWidth;
const slidesWrapper = document.querySelector('slider__slides');

const sliderImages = document.querySelectorAll('slider__image');
function scrollNext() {
  slideIndex++;
  if (slideIndex > countSlides - 1) slideIndex = 0;

  changeActiveIndicator();
  rollSlider();
}

function changeActiveIndicator() {
  let indicatorsArray = [];

  indicators.forEach((indicator) => {
    indicatorsArray.push(indicator);
    if (indicator.classList.contains('slider__indicator_active')) {
      indicator.classList.remove('slider__indicator_active');
    }
  });

  indicatorsArray[slideIndex].classList.add('slider__indicator_active');
}

function rollSlider() {
  slidesWrapper.style = `transform: translateX(${
    -sliderWidth * countSlides
  }px)`;
}

function defineSliderSizes() {
  sliderWidth = document.querySelector('slider').offsetWidth;
  slidesWrapper.style = `width: ${sliderWidth * countSlides}px`;
  sliderImages.forEach((image) => {
    image.style = `width: ${sliderWidth}px`;
  });
}

window.addEventListener('scroll', () => {
  if (checkInViewport(slider)) {
    if (!isIntervalRunning) {
      isIntervalRunning = true;
      intervalId = setInterval(scrollNext, 3000);
    }
  } else {
    isIntervalRunning = false;
    clearInterval(intervalId);
  }
});
