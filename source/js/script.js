// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import loadPage from './modules/page-load';
import rules from './modules/rules.js';
import LetterAnimation from './modules/letter-animation.js';
import prizes from './modules/prizes.js';
import timer from './modules/timer.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
loadPage();
rules();
prizes();
timer();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

new LetterAnimation(`.intro__title`, `intro__word`, 700, 500, 20).prePareText();
new LetterAnimation(`.intro__date`, `intro__number`, 700, 1300, 20).prePareText();
new LetterAnimation(`.rules__title`, `rules__word`, 700, 100, 25).prePareText();
new LetterAnimation(`.slider__item-title`, `slider__item-word`, 500, 0, 25).prePareText();
new LetterAnimation(`.prizes__title`, `prizes__word`, 700, 100, 35).prePareText();
