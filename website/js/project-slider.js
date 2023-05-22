const projectSliderInfo = {
  slider: document.querySelector('.project-slider'),
  currentSlideIndex: 0,
  indicatorsSelector: '.project-slider__indicator',
  activeIndicatorClass: 'project-slider__indicator_active',
  countSlides: document.querySelectorAll('.project-slider__slide').length,
  sliderWidth: document.querySelector('.project-slider').offsetWidth,

  /* Селектори слайдера для функції адаптиву defineSliderSizes */
  sliderSelector: '.project-slider',
  slidesBox: document.querySelector('.project-slider__slides'),
  sliderImages: document.querySelectorAll('.project-slider__image'),
  /* ------------------ */

  slidesBoxSelector: '.project-slider__slides',
  isIntervalRunning: false,
  intervalId: null,
  startFunction: playProjectSlider,
};

function playProjectSlider() {
  scrollNext(projectSliderInfo);
}

function scrollHandler() {
  controlIntervalProcess(projectSliderInfo);
}
function resizeHandler() {
  defineSliderSizes(projectSliderInfo);
}
defineSliderSizes(projectSliderInfo);
window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', resizeHandler);
