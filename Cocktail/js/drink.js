import { fetchCocktail } from "./utils/fetchCocktail.js";

const cocktailCenter = document.querySelector(".cocktail-center");

// const drinkID = localStorage.getItem("drink");

window.addEventListener("DOMContentLoaded", async () => {
  const searchString = new URLSearchParams(location.search);

  const drinkID = searchString.get("id");
  console.log(drinkID);

  let result = await fetchCocktail(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
  );

  cocktailCenter.innerHTML = result.name;
});

// let testArray = [1, 2, 3, 4, 5, 6, 6, 7, 5, 2, 2];

// let testSet = new Set(testArray);

// let newArray = [...testSet];

// console.log(newArray);

let option1 = "option1";
let option2 = "option2";
let option3 = "option3";
let option4 = "option4";

const handle = (section, ...option) => {
  return section.map((item, index) => `${item} + ${option[index]}`).join(" ");
};

let str = handle`hello ${option1} this is a ${option2} dog,${option3} and ${option4}`;

console.log(str);
