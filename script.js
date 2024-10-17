// render ui
let parentcontainer = document.querySelector(".parent-container");
function renderUI() {
  for (let i = 0; i <= 9; i++) {
    parentcontainer.innerHTML += ` <div class="container container${i}">
      <div class="containerup"></div>
      <div class="containerdown"><button class = "btn${i}">#ff001a</button></div>
    </div>`;
  }
}
let containerup = document.querySelector(".containerup");

const randomColorCodeGenerator = () => {
  let colorCode = "0123456789abcdef";
  let randomColorCode = "";
  for (let i = 1; i <= 6; i++) {
    randomColorCode += colorCode[Math.floor(Math.random() * 16)];
  }
  return randomColorCode;
};

const setRandomColors = () => {
  let btn = document.querySelectorAll("button");
  //display random color for all each time it loads
  btn.forEach((e, i) => {
    let randomColorCode = randomColorCodeGenerator();
    e.parentElement.previousElementSibling.style.backgroundColor = `#${String(
      randomColorCode
    )}`;
    e.innerHTML = `#${randomColorCode}`;
  });

  btn.forEach((e, i) => {
    e.addEventListener("click", () => {
      let randomColorCode = randomColorCodeGenerator();

      e.parentElement.previousElementSibling.style.backgroundColor = `#${String(
        randomColorCode
      )}`;
      e.innerHTML = `#${randomColorCode}`;
    });
  });
};

const app = () => {
  renderUI();
  setRandomColors();
};
app();
