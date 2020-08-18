import fetchCocktail from "./utils/fetchCocktail.js";

const RandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const cocktailCenter = document.querySelector(".cocktail-center");

const loadCocktails = async () => {
  let cocktails = [];
  let i = 0;
  while (i < 21) {
    let cocktail = await fetchCocktail(RandomURL);
    if (cocktails.every((item) => item.id !== cocktail.id)) {
      cocktails.push(cocktail);
      i++;
    }
  }

  cocktailCenter.innerHTML = cocktails
    .map(
      (cocktail) => `<div class="cocktail" data-id=${cocktail.id}>
            <img class="cocktail-img" src=${cocktail.image} alt="cocktail" />
          <div class="cocktail-name">${cocktail.name}</div>
        </div>`
    )
    .join(" ");

  // const cocktailList = document.querySelectorAll(".cocktail");
  // [...cocktailList].forEach((cocktail) => {
  //   cocktail.addEventListener("click", async (event) => {
  //     // let result = await fetchCocktail(
  //     //   `${idURL}${event.currentTarget.dataset.id}`
  //     // );
  //     // console.log(result);
  //     location.href = `./drink.html?id=${event.currentTarget.dataset.id}`;
  //     localStorage.setItem("drink", result.id);
  //   });
  // });

  cocktailCenter.addEventListener("click", (event) => {
    location.href = `./drink.html?id=${event.target.parentElement.dataset.id}`;
  });
};

window.addEventListener("DOMContentLoaded", loadCocktails);
