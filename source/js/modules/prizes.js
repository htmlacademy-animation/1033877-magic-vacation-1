import {animateProgress} from '../helpers/animate';

export default () => {
  const prizesScreen = document.querySelector(`.screen--prizes`);

  const prizesItemJourneys = document.querySelector(`.prizes__item--journeys`);
  const prizesItemCases = document.querySelector(`.prizes__item--cases`);
  const prizesItemCodes = document.querySelector(`.prizes__item--codes`);

  const prizePrimaryImg = document.querySelector(`.primary-award`);
  const prizePrimarySvgPath = `img/primary-award.svg`;
  const prizeSecondaryImg = document.querySelector(`.secondary-award`);
  const prizeSecondarySvgPath = `img/secondary-award.svg`;
  const prizeAdditionalImg = document.querySelector(`.additional-award`);
  const prizeAdditionalSvgPath = `img/additional-award.svg`;

  const prizesJourneyNumber = document.querySelector(`.prizes__item--journeys .prizes__desc b`);
  const prizesCasesNumber = document.querySelector(`.prizes__item--cases .prizes__desc b`);
  const prizesCodesNumber = document.querySelector(`.prizes__item--codes .prizes__desc b`);

  const FIRST_ANIMATION_START_COUNT = 3;
  const FIRST_ANIMATION_END_COUNT = 3;

  const SECOND_ANIMATION_START_COUNT = 1;
  const SECOND_ANIMATION_END_COUNT = 7;

  const THIRD_ANIMATION_START_COUNT = 11;
  const THIRD_ANIMATION_END_COUNT = 900;

  const COUNT_DURATION = 800;
  const COUNT_FPS = 12;

  prizesJourneyNumber.textContent = FIRST_ANIMATION_START_COUNT;
  prizesCasesNumber.textContent = SECOND_ANIMATION_START_COUNT;
  prizesCodesNumber.textContent = THIRD_ANIMATION_START_COUNT;

  let prizesAnimation = false;

  const animateNumber = (element, startCount = 0, stopCount, duration, fps) => {
    const fpsInterval = 1000 / fps;
    let currentCount = startCount;
    let now;
    let then = Date.now();
    let elapsed;

    const animation = animateProgress((progress) => {
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        element.textContent = currentCount.toString();

        currentCount = Math.ceil(progress * stopCount);
      }
    }, duration);

    animation.then(() => {
      element.textContent = stopCount;
    });
  };

  document.body.addEventListener(`screenChanged`, () => {
    const prizesScreenActive = prizesScreen.classList.contains(`active`);

    if (prizesScreenActive && !prizesAnimation) {
      setTimeout(() => {
        prizesItemJourneys.classList.add(`active`);

        setTimeout(() => {
          animateNumber(
              prizesJourneyNumber,
              FIRST_ANIMATION_START_COUNT,
              FIRST_ANIMATION_END_COUNT,
              COUNT_DURATION,
              COUNT_FPS,
          );
        }, 2300);
        prizePrimaryImg.src = `${prizePrimarySvgPath}?${Math.random()}`;
      }, 0);

      setTimeout(() => {
        prizesItemCases.classList.add(`active`);
        setTimeout(() => {
          animateNumber(
              prizesCasesNumber,
              SECOND_ANIMATION_START_COUNT,
              SECOND_ANIMATION_END_COUNT,
              COUNT_DURATION,
              COUNT_FPS,
          );
        }, 1000);

        prizeSecondaryImg.src = `${prizeSecondarySvgPath}?${Math.random()}`;
      }, 4400);

      setTimeout(() => {
        prizesItemCodes.classList.add(`active`);
        setTimeout(() => {
          animateNumber(
              prizesCodesNumber,
              THIRD_ANIMATION_START_COUNT,
              THIRD_ANIMATION_END_COUNT,
              COUNT_DURATION,
              COUNT_FPS,
          );
        }, 1000);
        prizeAdditionalImg.src = `${prizeAdditionalSvgPath}?${Math.random()}`;
      }, 6500);

      prizesAnimation = true;
    }
  });
};
