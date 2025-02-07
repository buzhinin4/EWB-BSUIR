let menuFlow = Array.from(
  document.getElementsByClassName("grid-menu__element")
).slice(0, 3);
let parentFlow = document.getElementById("parent-flow");
let cssFlow = document.getElementById("css-flow");
let menuJustify = Array.from(
  document.getElementsByClassName("grid-menu__element")
).slice(3, 7);
let childJustify = document.getElementById("child-justify");
let cssJustify = document.getElementById("css-justify");
let menuAlign = Array.from(
  document.getElementsByClassName("grid-menu__element")
).slice(7);
let childAlign = document.getElementById("child-align");
let cssAlign = document.getElementById("css-align");
function choiceSelector(e, array) {
  array.forEach((element) => {
    element.classList.remove("grid-menu__element--active");
  });
  e.currentTarget.classList.toggle("grid-menu__element--active");
  choice = e.currentTarget.innerHTML;
  switch (array) {
    case menuFlow:
      parentFlow.style.gridAutoFlow = choice;
      cssFlow.innerHTML = `
    .parent {
        display: grid;
        <mark>grid-auto-flow: ${choice};</mark>
    }`;
      break;
    case menuJustify:
      childJustify.style.justifySelf = choice;
      cssJustify.innerHTML = `
    .parent {
        display: grid;
    }
    .child {
        <mark>justify-self: ${choice};</mark>
    }
      `;
      break;
    case menuAlign:
      childAlign.style.alignSelf = choice;
      cssAlign.innerHTML = `
    .parent {
        display: grid;
    }
    .child {
        <mark>align-self: ${choice};</mark>
    }
      `;
      break;
  }
}

menuFlow.forEach((element) => {
  element.addEventListener("click", (e) => choiceSelector(e, menuFlow));
});

menuJustify.forEach((element) => {
  element.addEventListener("click", (e) => choiceSelector(e, menuJustify));
});

menuAlign.forEach((element) => {
  element.addEventListener("click", (e) => choiceSelector(e, menuAlign));
});
