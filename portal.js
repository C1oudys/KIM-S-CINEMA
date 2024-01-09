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
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" class="card-img-top">
    `;

    movieListContainer.appendChild(card);
  });
}
