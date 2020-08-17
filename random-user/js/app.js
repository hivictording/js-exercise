import getNewUser from "./utils/getNewUser.js";

const showUserInfo = async () => {
  currentUser = await getNewUser(randomUserURL);

  userImage.src = currentUser.image;
  userTitle.innerText = `My name is`;
  userTitleDetails.innerText = currentUser.name;
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
    let type = event.currentTarget.dataset.type;
    userTitle.innerText = `My ${type} is`;
    userTitleDetails.innerText = currentUser[type];
  });
});

window.addEventListener("DOMContentLoaded", showUserInfo);

randomUserBtn.addEventListener("click", showUserInfo);
