const RandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const cocktailCenter = document.querySelector(".cocktail-center");

const fetchCocktail = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  let { strDrinkThumb: image, strDrink: name, idDrink: id } = data.drinks[0];
  return { image, name, id };
};

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
          <div class="cocktail-img-container">
            <img class="cocktail-img" src=${cocktail.image} alt="cocktail" />
          </div>
          <div class="cocktail-name">${cocktail.name}</div>
        </div>`
    )
    .join(" ");

  const cocktailList = document.querySelectorAll(".cocktail");
  [...cocktailList].forEach((cocktail) => {
    cocktail.addEventListener("click", async (event) => {
      let result = await fetchCocktail(
        `${idURL}${event.currentTarget.dataset.id}`
      );
      console.log(result);
    });
  });
};

window.addEventListener("DOMContentLoaded", loadCocktails);
