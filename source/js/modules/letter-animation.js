export default class LetterAnimation {
  constructor(
      elementSelector,
      className,
      duration,
      initialDelay,
      indexDelay
  ) {
    this.elementSelector = elementSelector;
    this.className = className;
    this.duration = duration;
    this.element = document.querySelector(this.elementSelector);
    this.initialDelay = initialDelay;
    this.indexDelay = indexDelay;
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    const delay = this.indexDelay * Math.floor(Math.random() * 10);

    span.textContent = letter;
    span.style.animationDuration = `${this.duration}ms`;
    span.style.animationDelay = `${this.initialDelay + delay}ms`;
    return span;
  }

  prePareText() {
    if (!this.element) {
      return;
    }

    const text = this.element.textContent.trim().split(` `).filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(this.className);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this.element.innerHTML = ``;
    this.element.classList.add(`overflow`);
    this.element.appendChild(content);
  }
}
