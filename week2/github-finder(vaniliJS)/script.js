const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");
const toggle = document.getElementById("toggle");
const body = document.getElementById("body");

const createUserCard = (user) => {
  console.log("user", user);
  const cardHTML = `
    <div id="card" class="card">
      <div>
        <img id="avatar" class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div id="userInfo" class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
`;

  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");
  console.log("repos : ",repos);
  repos.slice(0, 10).forEach((repo) => {
    /**
     * <a class="repo" href={repo.html_url} target="_black">{repo.name}</a>
     */
    const repoEl = document.createElement("a"); // <a></a>
    repoEl.classList.add("repo"); // class="repo"
    repoEl.href = repo.html_url; // href={repo.html_url}
    repoEl.target = "_blank"; // target="_black"
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

const getRepos = async (username) => {
  const response = await fetch(`${API_URL}${username}/repos`);
  const responseData = await response.json();

  addReposToCard(responseData);
};  

const getUser = async (username) => {
  const response = await fetch(API_URL + username);
  const responseData = await response.json();
  console.log("responseData", responseData);

  createUserCard(responseData);
  getRepos(username);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = input.value;

  if (user) {
    getUser(user);
    input.value = "";
  }
});

toggle.addEventListener("click", (event) => {
  const userInfo = document.getElementById("userInfo");
  const repo = document.getElementsByClassName("repo");
  const card = document.getElementById("card");
  const avatar = document.getElementById("avatar");

  if(body.style.background !== "white"){
    body.style.background = "white";
    toggle.style.transform = "rotate(180deg)";
    toggle.style.color = "black";
    input.style.background = "white";
    input.style.color = "black";
    input.style.border = "solid";
    userInfo.style.color = "black";
    card.style.backgroundColor = "white";
    for(var i in repo)
    {
      var sub = repo.item(i);
      sub.style.backgroundColor = "#f2f2f2";
      sub.style.color = "black";
    }
    avatar.style.border = "10px solid #f2f2f2";
  }else{
    body.style.background = "#1b1d21";
    toggle.style.transform = "rotate(360deg)";
    toggle.style.color = "white";
    input.style.background = "24272b";
    input.style.color = "#b6b7b8";
    input.style.border = "none";
    userInfo.style.color = "#e5e6e7";
    card.style.backgroundColor = "#2c3035";
    for(var i in repo)
    {
      var sub = repo.item(i);
      sub.style.backgroundColor = "#393c42";
      sub.style.color = "#a0a0a2";
    }
    avatar.style.border = "10px solid #646568";
  }
})