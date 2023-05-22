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
  slidesBox.style.transform = `translateX(${
    -sliderInfo.currentSlideIndex * sliderInfo.sliderWidth
  }px)`;
}

function controlIntervalProcess(sliderData) {
  if (checkInViewport(sliderData.slider)) {
    if (!sliderData.isIntervalRunning) {
      sliderData.isIntervalRunning = true;
      sliderData.intervalId = setInterval(sliderData.startFunction, 6000);
    }
  } else {
    sliderData.isIntervalRunning = false;
    clearInterval(sliderData.intervalId);
  }
}

function makeSwitchingIndicatorsManually(sliderInfo, changeSlide) {
  // функція для переключення слайдів вручну за допомогою індикаторів
  const indicators = document.querySelectorAll(sliderInfo.indicatorsSelector);
  indicators.forEach((indicator) => {
    indicator.addEventListener('click', (event) => {
      changeSlide(
        event.target.parentElement.parentElement.getAttribute('class'),
        Number(event.target.id[event.target.id.length - 1])
      );
    });
  });
}
function defineSliderSizes(sliderInfo, relationWH = null) {
  sliderInfo.sliderWidth = document.querySelector(
    sliderInfo.sliderSelector
  ).offsetWidth;
  sliderInfo.slidesBox.style = `width: ${
    sliderInfo.sliderWidth * sliderInfo.countSlides
  }px`;
  sliderInfo.sliderImages.forEach((image) => {
    image.style = `width: ${sliderInfo.sliderWidth}px`;
  });

  // Якщо висоту слайдів потрібно визначати на основі ширини слайдера, то необхідно передати даній функції, як
  // другий аргумент, відношення ширини до висоти!
  if (relationWH) {
    sliderInfo.slides?.forEach((slide) => {
      slide.style = `height: ${sliderInfo.sliderWidth / relationWH}px`;
    });
  }
}
