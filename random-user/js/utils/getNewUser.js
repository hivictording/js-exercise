const getNewUser = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  let user = data.results[0];

  let {
    picture: { large: image },
    name: { first, last, title },
    email,
    dob: { date: birthday },
    location: { city: address },
    cell: phone,
    login: { password },
  } = user;

  let name = `${title} ${first} ${last}`;
  birthday = birthday.slice(0, 10);

  return {
    image,
    name,
    email,
    birthday,
    address,
    phone,
    password,
  };
};

export default getNewUser;
