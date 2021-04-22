export default () => {
  const TIME_LIMIT = 5 * 60 * 1000;
  let endTime = Date.now() + TIME_LIMIT;

  let fpsInterval = 1000 / 12;
  let now;
  let then = Date.now();
  let elapsed;

  const gameScreen = document.querySelector(`.screen--game`);
  const gameCounter = document.querySelector(`.game__counter span`);

  function pad(value) {
    return (`0` + Math.floor(value)).slice(-2);
  }

  function getRemainingTime(deadline) {
    const currentTime = Date.now();
    return deadline - currentTime;
  }

  function showTime() {
    const remainingTime = getRemainingTime(endTime);
    const seconds = pad((remainingTime / 1000) % 60);
    const minutes = pad((remainingTime / (60 * 1000)) % 60);

    if (remainingTime > 0) {
      requestAnimationFrame(showTime);
    } else {
      seconds.textContent = `00`;
      minutes.textContent = `00`;
    }

    gameCounter.innerHTML = `${minutes}:${seconds}`;
  }

  function tick() {
    requestAnimationFrame(tick);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      showTime();
    }
  }

  document.body.addEventListener(`screenChanged`, () => {
    const gameScreenActive = gameScreen.classList.contains(`active`);

    if (gameScreenActive) {
      endTime = Date.now() + TIME_LIMIT;
      tick();
    }
  });
};
