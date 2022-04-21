/* abre e fecha menu quando clicar no icone */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar o header da página quando der scrollbar */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //maior que a altura do header
    header.classList.add("scroll");
  } else {
    //menor que a altura do header
    header.classList.remove("scroll");
  }
}

/* Botão voltar para o topo */
const backToTopButton = document.querySelector(".back-to-top");
function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* When Scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});

const url = "https://api.github.com/users/DjalmaHenry/repos";
let repos = [];

const listaRepos = document.getElementById("cards");

function gerarListaRepos() {
  listaRepos.innerHTML = "";
  for (let i = 0; i < repos.length; ++i) {
    const li = document.createElement("li");
    li.classList.add("card");
    if (repos[i].description == null) {
      repos[i].description = "Sem descrição";
    }
    if (repos[i].language == null) {
      repos[i].language = "Linguagem não definida";
    }

    li.innerHTML = `
            <h2>${repos[i].name}</h2>
            <p>${repos[i].description}</p>
            <p>Linguagem: ${repos[i].language}</p>
            <p>⭐ ${repos[i].stargazers_count}</p>
          `;
    li.onclick = (event) => {
      window.open(repos[i].html_url);
    };
    listaRepos.appendChild(li);
  }
}

const fetchRepos = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      repos = data;
      console.log(repos);
      gerarListaRepos();
    });
};

fetchRepos();
