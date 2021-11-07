const API_KEY = "cfd2de22b23b184aca8e4ff2cdc8f308";
const BASE_URL = "https://api.themoviedb.org/3/";

async function fetchMoviesApi(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("No such movies in database"));
}

export function fetchTrendingMovies(page) {
  return fetchMoviesApi(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=${page}`
  );
}

export function fetchMoviesByQuery(query) {
  return fetchMoviesApi(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false)&query=${query}`
  );
}

export function fetchMovieById(id) {
  return fetchMoviesApi(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCasts(id) {
  return fetchMoviesApi(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return fetchMoviesApi(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
