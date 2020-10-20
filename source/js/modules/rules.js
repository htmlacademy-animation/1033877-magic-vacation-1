export default () => {
  const lastRulesItem = document.querySelector(`.rules__item:last-child`);
  const rulesLink = document.querySelector(`.rules__link`);

  lastRulesItem.addEventListener(`animationend`, () => {
    rulesLink.classList.add(`rules__link--active`);
  });
};
