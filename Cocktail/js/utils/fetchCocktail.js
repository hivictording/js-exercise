const fetchCocktails = async (url) => {
  try {
    let data = await fetch(url);
    data = await data.json();
    return data.drinks.map((item) => {
      let { strDrinkThumb: image, strDrink: name, idDrink: id } = item;
      return { image, name, id };
    });
  } catch (error) {
    console.log(`Fetching error: ${error}`);
    return null;
  }
};

export const fetchCocktail = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  let { strDrinkThumb: image, strDrink: name, idDrink: id } = data.drinks[0];
  return { image, name, id };
};

export default fetchCocktails;
