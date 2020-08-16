import getNewUser from "./utils/getNewUser.js";

const showUserInfo = async () => {
  currentUser = await getNewUser(randomUserURL);
  let {
    name: { first, last, title },
    picture: { large: image },
  } = currentUser;

  userImage.src = image;
  userTitle.innerText = `My name is`;
  userTitleDetails.innerText = `${title} ${first} ${last}`;
};

const randomUserURL = "https://randomuser.me/api/";

const userImage = document.querySelector(".user-image").children[0];
const userTitle = document.querySelector(".user-title");
const userTitleDetails = document.querySelector(".user-title-details");

const userBtns = document.querySelector(".user-btns").children;
const randomUserBtn = document.querySelector(".btn-random-user");

let currentUser;

[...userBtns].forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    switch (event.currentTarget.dataset.type) {
      case "name": {
        userImage.src = currentUser.picture.large;
        let { first, last, title } = currentUser.name;
        userTitle.innerText = `My name is`;
        userTitleDetails.innerText = `${title} ${first} ${last}`;
        break;
      }
      case "email": {
        userTitle.innerText = `My email is`;
        userTitleDetails.innerText = currentUser.email;
        break;
      }
      case "dob": {
        userTitle.innerText = `My dob is`;
        userTitleDetails.innerText = currentUser.dob.date.slice(0, 10);
        break;
      }
      case "address": {
        userTitle.innerText = `My city is`;
        userTitleDetails.innerText = currentUser.location.city;
        break;
      }
      case "phone": {
        userTitle.innerText = `My cell phone is`;
        userTitleDetails.innerText = currentUser.cell;
        break;
      }
      case "password": {
        userTitle.innerText = `My password is`;
        userTitleDetails.innerText = currentUser.login.password;
        break;
      }
    }
  });
});

window.addEventListener("DOMContentLoaded", showUserInfo);

randomUserBtn.addEventListener("click", showUserInfo);
