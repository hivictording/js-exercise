const getNewUser = async (url) => {
  let user;
  await fetch(url)
    .then((data) => data.json())
    .then((data) => {
      user = data.results[0];
    });
  return user;
};

export default getNewUser;
