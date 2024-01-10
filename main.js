const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGViYjI1OGM2ZmIyOTlmNjFmZjA0NWE5OTk4M2ZkOCIsInN1YiI6IjY1OTM4MTQ0NGY5YTk5NzM4ZTc4N2QyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4RuroY4HnWjg1kwQ1aqHkuT6MPWEp-gE6VFf35B_e8Q"
  }
};

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGViYjI1OGM2ZmIyOTlmNjFmZjA0NWE5OTk4M2ZkOCIsInN1YiI6IjY1OTM4MTQ0NGY5YTk5NzM4ZTc4N2QyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4RuroY4HnWjg1kwQ1aqHkuT6MPWEp-gE6VFf35B_e8Q"
    }
  };

  fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
    .then((response) => response.json())
    .then((data) => displayMovies(data.results))
    .catch((err) => console.error(err));

  function displayMovies(movies) {
    const movieListContainer = document.getElementById("movieList");

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("col");
      card.setAttribute("id", movie.id);
      card.innerHTML = `
               <div class="card shadow-sm">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${movie.title}</h5>
                  <p class="card-text">${movie.overview}</p>
                  <p class="card-rating">Rating : ${movie.vote_average} </p>
                </div>
              </div>
            `;
      card.addEventListener("click", function () {
        showAlert(`Movie ID: ${movie.id}`);
      });
      function showAlert(message) {
        alert(message);
      }
      movieListContainer.appendChild(card);
    });
  }
});

function searchMovies() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();
  const movieCards = Array.from(document.querySelectorAll("#movieList > .col"));

  const filteredCards = movieCards.filter((card) => {
    const title = card.querySelector(".card-title").innerText.toLowerCase();
    return title.includes(searchTerm);
  });

  movieCards.forEach((card) => {
    const isVisible = filteredCards.includes(card);
    card.style.display = isVisible ? "block" : "none";
  });
}

window.location = "./root/portal.html";
