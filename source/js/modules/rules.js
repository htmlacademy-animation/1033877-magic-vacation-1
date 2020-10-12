export default () => {
  const lastRulesItemText = document.querySelector(`.rules__item:last-child p`);
  const rulesLink = document.querySelector(`.rules__link`);

  lastRulesItemText.addEventListener(`animationstart`, () => {
    rulesLink.classList.add(`rules__link--active`);
  });
};
