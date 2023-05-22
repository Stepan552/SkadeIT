const creatingStages = document.querySelectorAll('.creating-stages__item');
let currentStage = 0;
let intervalStageId = null;
let isIntervalStageRunning = false;
let creatingStagesArray = [];
creatingStages.forEach((stage) => {
  creatingStagesArray.push(stage);
});

function changeStageNext() {
  currentStage++;
  if (currentStage > creatingStages.length - 1) currentStage = 0;

  changeStagesOpacity(creatingStagesArray);
  blinkIndicator();
}

function changeStagesOpacity(stages) {
  stages.forEach((stage) => {
    if (stage.classList.contains('creating-stages__item_visible')) {
      stage.classList.remove('creating-stages__item_visible');
    }
  });
  stages[currentStage].classList.add('creating-stages__item_visible');
}

function blinkIndicator() {
  const indicator = document.querySelector('.creating-stages__item-indicator ');
  setTimeout(() => {
    indicator.classList.add('creating-stages__item-indicator_not-active');
  }, 2900);

  setTimeout(() => {
    indicator.classList.remove('creating-stages__item-indicator_not-active');
  }, 3200);
}

function checkViewportWidth() {
  if (!(window.innerWidth > 575)) {
    isIntervalStageRunning = false;
    clearInterval(intervalStageId);
  } else {
    if (!isIntervalStageRunning) {
      isIntervalStageRunning = true;
      intervalStageId = setInterval(changeStageNext, 3000);
    }
  }
}

window.addEventListener('resize', checkViewportWidth);
if (window.innerWidth > 575) {
  isIntervalStageRunning = true;
  intervalStageId = setInterval(changeStageNext, 3000);
}
