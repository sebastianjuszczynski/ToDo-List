const headerSpan = document.querySelector(".header__span");
const headerSpanCursor = document.querySelector(".header__spanCursor");
const headerSpanText = "The to do app!!!";

let indexText = 0;
const time = 150;

const addLetter = () => {
  headerSpan.textContent += headerSpanText[indexText];
  indexText++;
  if (indexText === headerSpanText.length) clearInterval(typing);
};

const typing = setInterval(addLetter, time);
