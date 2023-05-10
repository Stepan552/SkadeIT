const advantageSlider = document.querySelector('.advantage-slider');
const slidesBox = document.querySelector('.advantage-slider__slides');
const slides = document.querySelectorAll('.advantage-slider__slide');
const indicatorsSlider = document.querySelectorAll(
  '.advantage-slider__indicator'
);
let slideAdvantageIndex = slides.length - 1; // тому що необхідно, щоб блок із слайдами пересувався вниз, а не вгору
let indicatorCount = 0;
const slideHeight = parseInt(advantageSlider.style.height);
const startCoordY = parseInt(slidesBox.style.transform.match(/\d+/));

let isSecondIntervalRunning = false;
let secondIntervalId = null;

window.addEventListener('scroll', () => {
  if (checkInViewport(advantageSlider)) {
    if (!isSecondIntervalRunning) {
      isSecondIntervalRunning = true;
      secondIntervalId = setInterval(moveNext, 5000);
    }
  } else {
    isSecondIntervalRunning = false;
    clearInterval(secondIntervalId);
  }
});

function moveNext() {
  slideAdvantageIndex--;
  if (slideAdvantageIndex < 0) slideAdvantageIndex = slides.length - 1;

  moveIndicators();
  moveVerticalSlider();
}

function moveIndicators() {
  indicatorCount++;
  if (indicatorCount > 3) indicatorCount = 0;
  indicatorsSlider.forEach((indicator) => {
    indicator.style.top =
      parseInt(indicator.style.height) * indicatorCount + 'px';
  });
}
function moveVerticalSlider() {
  slidesBox.style.transform = `translateY(${
    -slideHeight * slideAdvantageIndex
  }px)`;
}
