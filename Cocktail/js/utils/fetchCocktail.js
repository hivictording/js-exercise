const fetchCocktail = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  let { strDrinkThumb: image, strDrink: name, idDrink: id } = data.drinks[0];
  return { image, name, id };
};

export default fetchCocktail;
