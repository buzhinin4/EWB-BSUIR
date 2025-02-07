let menuGrow = Array.from(
  document.getElementsByClassName("flex-menu__element")
).slice(0, 2);
let childGrow = document.getElementById("child-grow");
let cssGrow = document.getElementById("css-grow");
let menuShrink = Array.from(
  document.getElementsByClassName("flex-menu__element")
).slice(2, 4);
let childShrink = document.getElementById("child-shrink");
let cssShrink = document.getElementById("css-shrink");
let menuBasis = Array.from(
  document.getElementsByClassName("flex-menu__element")
).slice(4);
let childBasis = document.getElementById("child-basis");
let cssBasis = document.getElementById("css-basis");
function choiceSelector(e, array) {
  array.forEach((element) => {
    element.classList.remove("flex-menu__element--active");
  });
  e.currentTarget.classList.toggle("flex-menu__element--active");
  choice = e.currentTarget.innerHTML;
  switch (array) {
    case menuGrow:
      childGrow.style.flexGrow = choice;
      cssGrow.innerHTML = `
    .parent {
      display: flex;
      height: 100%;
    }
    .child-active {
      <mark>flex-grow: ${choice};</mark>
    }`;
      break;
    case menuShrink:
      childShrink.style.flexShrink = choice;
      cssShrink.innerHTML = `
      .parent {
        display: flex;
        height: 100%;
      }
      .child {
        width: 40%;
      }
      .child-active {
        <mark>flex-shrink: ${choice};</mark>
      }
      `;
      break;
    case menuBasis:
      childBasis.style.flexBasis = choice;
      cssBasis.innerHTML = `
      .parent {
        display: flex;
        height: 100%;
      }
      .child-active {
        <mark>flex-basis: ${choice};</mark>
      }
      `;
      break;
  }
}

menuGrow.forEach((element) => {
  element.addEventListener("click", (e) => choiceSelector(e, menuGrow));
});

menuShrink.forEach((element) => {
  element.addEventListener("click", (e) => choiceSelector(e, menuShrink));
});

menuBasis.forEach((element) => {
  element.addEventListener("click", (e) => choiceSelector(e, menuBasis));
});
