// buat menu dan search
const navbarmenu = document.querySelector(".navbar");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// menu
document.querySelector("#btn-menu").onclick = (e) => {
  navbarmenu.classList.toggle("active");
  e.preventDefault();
};
// search
document.querySelector("#btn-cari").onclick = (e) => {
  searchForm.classList.toggle("active");
  e.preventDefault();
  searchBox.focus();
};

// klik diluar sidebar agar bisa hilang
const menuIkon = document.querySelector("#btn-menu");
const menuSearch = document.querySelector("#btn-cari");
// menu
document.addEventListener("click", function (e) {
  if (!menuIkon.contains(e.target) && !navbarmenu.contains(e.target)) {
    navbarmenu.classList.remove("active");
  }
  // cari
  document.addEventListener("click", function (e) {
    if (!menuSearch.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
  });
});

// buat get API movie
const API_KEY = "api_key=27553c7ddebf26c25bde31b58de302c9";
const URL = "https://api.themoviedb.org/3";
const URL_API =
  URL +
  "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&" +
  API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const movie = document.getElementById("movieKonten");

getMovie(URL_API);

function getMovie(baseUrl) {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovie(data.results);
    });

  function showMovie(data) {
    movieKonten.innerHTML = "";
    data.forEach((Movie) => {
      const { title, poster_path, vote_average, overview } = Movie;
      const moveiE1 = document.createElement("div");
      moveiE1.classList.add("movie-details");
      moveiE1.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="">${vote_average}</span>
                </div>
                <div class="movie-review">
                    <h4>Overview</h4>
                   ${overview};
                </div>
        `;
      movieKonten.appendChild(moveiE1);
      // movie.appendChild(moveiE1);
    });
  }
}
