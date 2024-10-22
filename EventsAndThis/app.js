function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  let count = 0;
  button.addEventListener("click", colorize);
}

const newButton = document.querySelector(".newButton");

newButton.addEventListener("click", colorize);

function colorize() {
  this.style.backgroundColor = makeRandomColor();
}
