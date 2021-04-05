export default () => {
  const prizesScreen = document.querySelector(`.screen--prizes`);

  const prizePrimaryImg = document.querySelector(`.primary-award`);
  const prizePrimarySvgPath = `img/primary-award.svg`;

  const prizeSecondaryImg = document.querySelector(`.secondary-award`);
  const prizeSecondarySvgPath = `img/secondary-award.svg`;

  const prizeAdditionalImg = document.querySelector(`.additional-award`);
  const prizeAdditionalSvgPath = `img/additional-award.svg`;

  let prizesAnimation = false;

  document.body.addEventListener(`screenChanged`, () => {
    const prizesScreenActive = prizesScreen.classList.contains(`active`);

    if (prizesScreenActive && !prizesAnimation) {
      prizePrimaryImg.src = `${prizePrimarySvgPath}?${Math.random()}`;

      setTimeout(() => {
        prizeSecondaryImg.src = `${prizeSecondarySvgPath}?${Math.random()}`;
      }, 3800);

      setTimeout(() => {
        prizeAdditionalImg.src = `${prizeAdditionalSvgPath}?${Math.random()}`;
      }, 6000);

      prizesAnimation = true;
    }
  });
};
