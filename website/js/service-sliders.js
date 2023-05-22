const serviceTechnologiesSliderInfo = {
  slider: document.querySelector('.service-slider'),
  currentSlideIndex: 0,
  indicatorsSelector: '.service-slider__indicator',
  activeIndicatorClass: 'service-slider__indicator_active',
  countSlides: document.querySelectorAll('.service-slider__slide').length,
  sliderWidth: document.querySelector('.service-slider').offsetWidth,

  /* Селектори слайдера для функції адаптиву defineSliderSizes */
  sliderSelector: '.service-slider',
  slidesBox: document.querySelector('.service-slider__slides'),
  sliderImages: document.querySelectorAll('.service-slider__image'),
  /* ------------------ */

  slidesBoxSelector: '.service-slider__slides',
  isIntervalRunning: false,
  intervalId: null,
  startFunction: playServiceTechnologiesSlider,
};
const serviceTrustSliderInfo = {
  slider: document.querySelector('.trust-slider'),
  slides: document.querySelectorAll('.trust-slider__slide'),
  currentSlideIndex: 0,
  indicatorsSelector: '.trust-slider__indicator',
  activeIndicatorClass: 'trust-slider__indicator_active',
  countSlides: document.querySelectorAll('.trust-slider__slide').length,
  sliderWidth: document.querySelector('.trust-slider').offsetWidth,

  /* Властивості для функції адаптиву defineSliderSizes */
  sliderSelector: '.trust-slider',
  slidesBox: document.querySelector('.trust-slider__slides'),
  sliderImages: document.querySelectorAll('.trust-slider__image'),
  /* ------------------ */

  slidesBoxSelector: '.trust-slider__slides',
  isIntervalRunning: false,
  intervalId: null,
  startFunction: playServiceTrustSlider,
};

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', resizeHandler);
defineSliderSizes(serviceTechnologiesSliderInfo);
defineSliderSizes(serviceTrustSliderInfo, 1.66);

function playServiceTechnologiesSlider() {
  scrollNext(serviceTechnologiesSliderInfo);
}
function playServiceTrustSlider() {
  scrollNext(serviceTrustSliderInfo);
}

function scrollHandler() {
  controlIntervalProcess(serviceTechnologiesSliderInfo);
  controlIntervalProcess(serviceTrustSliderInfo);
}
function resizeHandler() {
  defineSliderSizes(serviceTechnologiesSliderInfo);
  defineSliderSizes(serviceTrustSliderInfo, 1.66);
}
