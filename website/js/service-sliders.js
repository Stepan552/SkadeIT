const serviceTechnologiesSliderInfo = {
  slider: document.querySelector('.service-slider'),
  currentSlideIndex: 0,
  indicatorsSelector: '.service-slider__indicator',
  activeIndicatorClass: 'service-slider__indicator_active',
  countSlides: document.querySelectorAll('.service-slider__slide').length,
  slideWidth: document.querySelector('.service-slider__slide').offsetWidth,
  slidesBoxSelector: '.service-slider__slides',
  isIntervalRunning: false,
  intervalId: null,
  startFunction: playServiceTechnologiesSlider,
};
const serviceTrustSliderInfo = {
  slider: document.querySelector('.trust-slider'),
  currentSlideIndex: 0,
  indicatorsSelector: '.trust-slider__indicator',
  activeIndicatorClass: 'trust-slider__indicator_active',
  countSlides: document.querySelectorAll('.trust-slider__slide').length,
  slideWidth: document.querySelector('.trust-slider__slide').offsetWidth,
  slidesBoxSelector: '.trust-slider__slides',
  isIntervalRunning: false,
  intervalId: null,
  startFunction: playServiceTrustSlider,
};

window.addEventListener('scroll', scrollHandler);

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
