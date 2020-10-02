export default () => {
  const body = document.body;

  window.addEventListener(`load`, () => {
    body.classList.add(`page-load`);
  });
};
