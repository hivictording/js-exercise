import fetchCocktails from "./utils/fetchCocktail.js";

const displayCocktails = (cocktails) => {
  if (cocktails) {
    cocktailCenter.innerHTML = cocktails
      .map(
        (cocktail) => `<div class="cocktail" data-id=${cocktail.id}>
            <img class="cocktail-img" src=${cocktail.image} alt="cocktail" />
          <div class="cocktail-name">${cocktail.name}</div>
        </div>`
      )
      .join(" ");

    const cocktailList = document.querySelectorAll(".cocktail");

    for (const cocktail of cocktailList) {
      cocktail.addEventListener("click", (event) => {
        location.href = `./drink.html?id=${event.currentTarget.dataset.id}`;
        localStorage.setItem("drink", event.currentTarget.dataset.id);
      });
    }
  } else {
    cocktailCenter.innerHTML = "Sorry, no result matched your search";
  }
};

const RandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const MarioURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const search = document.getElementsByName("search")[0];

const cocktailCenter = document.querySelector(".cocktail-center");

const loadCocktails = async () => {
  // let cocktails = [];
  // let i = 0;
  // while (i < 21) {
  //   let cocktail = await fetchCocktail(RandomURL);
  //   if (cocktails.every((item) => item.id !== cocktail.id)) {
  //     cocktails.push(cocktail);
  //     i++;
  //   }
  // }

  let cocktails = await fetchCocktails(`${MarioURL}m`);

  displayCocktails(cocktails);

  // cocktailCenter.addEventListener("click", (event) => {
  //   location.href = `./drink.html?id=${event.target.parentElement.dataset.id}`;
  // });
};

window.addEventListener("DOMContentLoaded", loadCocktails);

search.addEventListener("keyup", async function () {
  let value = this.value ? this.value : "m";
  let cocktails = await fetchCocktails(`${MarioURL}${value}`);

  // console.log(cocktails);

  displayCocktails(cocktails);
});
