export default () => {
  const prizesScreen = document.querySelector(`.screen--prizes`);
  const prizePrimaryImg = document.querySelector(`.primary-award`);
  const prizePrimarySvgPath = `img/primary-award.svg`;
  let prizePrimaryAnimation = false;

  document.body.addEventListener(`screenChanged`, () => {
    const prizesScreenActive = prizesScreen.classList.contains(`active`);

    if (prizesScreenActive && !prizePrimaryAnimation) {
      prizePrimaryImg.src = `${prizePrimarySvgPath}?${Math.random()}`;
      prizePrimaryAnimation = true;
    }
  });
};
