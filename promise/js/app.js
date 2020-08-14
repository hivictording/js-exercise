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
    let err = newElement();
    err.innerText = error;
    container.appendChild(err);
  }
});

function newElement() {
  let newElement = document.createElement("H1");
  newElement.style.color = "red";

  return newElement;
}

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

const jokeButton = document.querySelector(".button-joke");
const jokeURL = "https://api.chucknorris.io/jokes/rando";
const jokeH1 = document.querySelector(".joke");

// // using then() catch()
// jokeButton.addEventListener("click", () => {
//   getJoke(jokeURL)
//     .then((joke) => (jokeH1.innerText = joke))
//     .catch((error) => (jokeH1.innerText = error));
// });

// using async/await
// jokeButton.addEventListener("click", async () => {
//   try {
//     let response = await getJoke(jokeURL);
//     jokeH1.innerText = response;
//   } catch (error) {
//     jokeH1.innerText = error;
//   }
// });

// function getJoke(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", jokeURL);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//           let { value: joke } = JSON.parse(xhr.responseText);
//           resolve(joke);
//         } else {
//           reject(`Get remote data error from ${url}`);
//         }
//       }
//     };
//     xhr.send();
//   });
// }

// using fetch
jokeButton.addEventListener("click", () => {
  fetch(jokeURL)
    .then((data) => data.json())
    .then((data) => (jokeH1.innerText = data.value))
    .catch((error) => console.log(`${error} ${error}`));
});
