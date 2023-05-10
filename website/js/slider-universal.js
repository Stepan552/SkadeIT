function scrollNext(sliderInfo) {
  sliderInfo.currentSlideIndex++;
  if (sliderInfo.currentSlideIndex > sliderInfo.countSlides - 1)
    sliderInfo.currentSlideIndex = 0;

  changeIndicator(sliderInfo);
  rollHorizontalSlider(sliderInfo);
}

function changeIndicator(sliderInfo) {
  const indicators = document.querySelectorAll(sliderInfo.indicatorsSelector);
  let indicatorsArray = [];
  // Кількість індикаторів = кількість слайдів, тому можна використовувати currentSlideIndex
  indicators.forEach((indicator) => {
    indicatorsArray.push(indicator);
    if (indicator.classList.contains(sliderInfo.activeIndicatorClass)) {
      indicator.classList.remove(sliderInfo.activeIndicatorClass);
    }
  });
  indicatorsArray[sliderInfo.currentSlideIndex].classList.add(
    sliderInfo.activeIndicatorClass
  );
}

function rollHorizontalSlider(sliderInfo) {
  const slidesBox = document.querySelector(sliderInfo.slidesBoxSelector);
  console.log(slidesBox);
  slidesBox.style.transform = `translateX(${
    -sliderInfo.currentSlideIndex * sliderInfo.slideWidth
  }px)`;
}

function controlIntervalProcess(sliderData) {
  console.log(checkInViewport(sliderData.slider));
  if (checkInViewport(sliderData.slider)) {
    if (!sliderData.isIntervalRunning) {
      sliderData.isIntervalRunning = true;
      sliderData.intervalId = setInterval(sliderData.startFunction, 5000);
    }
  } else {
    sliderData.isIntervalRunning = false;
    clearInterval(sliderData.intervalId);
  }
}
