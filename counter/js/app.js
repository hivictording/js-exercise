const number = document.querySelector("#number");

const buttons = document.querySelectorAll(".button");
// let result = 0;

buttons.forEach((button) => {
  let buttonClassList = button.classList;
  let result = 0;

  button.addEventListener("click", function () {
    if (buttonClassList.contains("decrease")) {
      result = Number.parseInt(number.innerText) - 1;
      //   result--;
    } else if (buttonClassList.contains("increase")) {
      result = Number.parseInt(number.innerText) + 1;
      //   result++;
    }

    number.innerText = result;
    if (result > 0) {
      number.classList.add("green");
      number.classList.remove("red");
    } else if (result < 0) {
      number.classList.add("red");
      number.classList.remove("green");
    } else {
      number.classList.remove("red");
      number.classList.remove("green");
    }
  });
});
