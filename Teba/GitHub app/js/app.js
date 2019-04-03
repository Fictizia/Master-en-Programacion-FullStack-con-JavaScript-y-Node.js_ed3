
// Selectores
const userNameSlctr = document.querySelector(".form-control");
const submitSlctr = document.querySelector(".submitBtn");
const clearSlctr = document.querySelector(".clearBtn");
const userInfo = document.querySelector(".mainInfo");

// Functions

function userInfoRender(data){
    let userCard = `<div class="card userInfo">
    <img class="card-img-top userAvatar" src="${data.avatar_url}" alt="user Avatar">
    <div class="card-body">
      <h5 class="card-title userName">${data.name} | @${data.login}</h5>
      <p class="card-text userBio">Bio: ${data.bio}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item userLocation">Location: ${data.location}</li>
      <li class="list-group-item userEmail">Email: ${data.email}</li>
    </ul>
    <div class="card-body">
      <a href="${data.html_url}" class="card-link userProfile" target="_blank">Github user profile</a>
    </div>
  </div>`
  userInfo.innerHTML = userCard;
  if (data.bio === null){
    const bioSlctr = document.querySelector(".userBio");
    bioSlctr.style.display = "none";
  };
  if (data.email === null){
    emailFinder(data);
  };
};

function extractEmails(text) { 
  const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  return [...new Set(emails)];
}

function emailRender(data) {
  const emailSlctr = document.querySelector(".userEmail");
  emailSlctr.innerText = `Email: ${extractEmails(data).join(", \n")}`;
}

function emailFinder(data) {
    fetch(`https://api.github.com/users/${data.login}/events`)
    .then(r => r.text())
    .then(data => emailRender(data))
    .catch(e => console.log(e))
}


function errorRender(e){
  let errorMsg = `<h5 class="text-muted">${e.message}!</h5>`;
  userInfo.innerHTML = "";
  userInfo.innerHTML = errorMsg;
}

// @see: https://stackoverflow.com/a/39297738
function renderMain(userName){
    fetch(`https://api.github.com/users/${userName}`)
    .then(r => {
      if (r.status !==200){
        return Promise.reject({
          message: "ERROR! User not found"
        });
      } else {
        return r.json();
      }
    })
    .then(data => userInfoRender(data))
    .catch(e => errorRender(e))
}

// Eventos
submitSlctr.addEventListener("click", function(evt){
  let name = userNameSlctr.value;
  console.log(name);
  renderMain(name);
})

clearSlctr.addEventListener("click", function(evt){
  userNameSlctr.value = "";
  userInfo.innerHTML = "";
})
