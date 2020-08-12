const container = document.querySelector(".container");
const h1One = document.querySelector(".one");
const h1Two = document.querySelector(".two");
const h1Three = document.querySelector(".three");
const buttonChange = document.querySelector(".change");

// buttonChange.addEventListener("click", () =>
//   changeColor(h1One, 2000, "green")
//     .then(() => changeColor(h1Two, 2000, "red"))
//     .then(() => changeColor(h1Three, 2000, "blue"))
//     .catch((error) => {
//       let h1Error = document.createElement("H1");
//       h1Error.innerText = error;
//       h1Error.style.color = "red";
//       container.appendChild(h1Error);
//     })
// );

buttonChange.addEventListener("click", async () => {
  try {
    await changeColor(h1One, 1000, "red");
    await changeColor(h1Two, 1000, "blue");
    await changeColor(h1Three, 1000, "green");
  } catch (error) {
    let h1Error = document.createElement("H1");
    h1Error.innerText = error;
    h1Error.style.color = "red";
    container.appendChild(h1Error);
  }
});

function changeColor(element, time, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such element ${element}`);
    }
  });
}
