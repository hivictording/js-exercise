import fetchCocktail from "./utils/fetchCocktail.js";

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

let testArray = [1, 2, 3, 4, 5, 6, 6, 7, 5, 2, 2];

let testSet = new Set(testArray);

let newArray = [...testSet];

console.log(newArray);
