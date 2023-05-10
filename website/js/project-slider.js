const projectSliderInfo = {
  slider: document.querySelector('.project-slider'),
  currentSlideIndex: 0,
  indicatorsSelector: '.project-slider__indicator',
  activeIndicatorClass: 'project-slider__indicator_active',
  countSlides: document.querySelectorAll('.project-slider__slide').length,
  slideWidth: document.querySelector('.project-slider__slide').offsetWidth,
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

window.addEventListener('scroll', scrollHandler);
