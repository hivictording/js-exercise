const letters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const getRandomNumber = (limit) => Math.floor(Math.random() * limit);

const buttonChangeColor = document.getElementById("change-color");
const main = document.getElementById("main");
const display = document.getElementById("display");

buttonChangeColor.addEventListener("click", function (event) {
  event.preventDefault();

  let color = "#";
  console.log(letters[getRandomNumber(letters.length)]);

  for (i = 0; i < 6; i++) {
    color += letters[getRandomNumber(letters.length)];
  }

  main.style.background = color;
  display.innerText = color;
});
