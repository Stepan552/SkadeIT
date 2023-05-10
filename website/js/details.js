const burger = document.querySelector('.header__burger');
const navigationMenu = document.querySelector('.header__navigation-menu');

const questionElements = document.querySelectorAll('.question-items__box > *');
const descriptionElements = document.querySelectorAll(
  '.question-items__item-description'
);

const projects = document.querySelectorAll('.portfolio-project');
const projectDecorations = document.querySelectorAll(
  '.portfolio-project__decoration'
);

burger.addEventListener('click', controlMenu);

navigationMenu.addEventListener('click', (event) => {
  event.stopPropagation();
});
function controlMenu() {
  toggleStyleBurger();
  toggleNavigationMenu();
}
function toggleStyleBurger() {
  burger.classList.toggle('header__burger');
  burger.classList.toggle('header__clicked-burger');
}
function toggleNavigationMenu() {
  navigationMenu.classList.toggle('header__navigation-menu_hidden');
}

// Стосується елементів питання
questionElements.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    elem.lastElementChild.classList.toggle(
      'question-items__item-description_visible'
    );
    questionElements.forEach((questionElem) => {
      if (!event.composedPath().includes(questionElem)) {
        if (
          questionElem.lastElementChild.classList.contains(
            'question-items__item-description_visible'
          )
        ) {
          questionElem.lastElementChild.classList.remove(
            'question-items__item-description_visible'
          );
        }
      }
    });
    event.target.lastElementChild;
  });
});
descriptionElements.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

/* Стосується проектів із портфоліо  */

projects.forEach((project) => {
  const hoverElement = project.querySelector(
    '.portfolio-project__hover-element'
  );
  project.addEventListener('mouseover', () => {
    hoverElement.style = 'width: 100%';
    hoverElement.firstElementChild.style = 'opacity: 1';
  });
  project.addEventListener('mouseout', () => {
    hoverElement.style = 'width: 0';
    hoverElement.firstElementChild.style = 'opacity: 0';
  });
});
projectDecorations.forEach((decoration) => {
  decoration.addEventListener('mouseover', (event) => {
    event.stopPropagation();
  });
});
