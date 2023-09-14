export const BASE_URL = "https://api.movies.puppies.nomoreparties.co";

function _getResponseData(res) {
  if (!res.ok) {
    return res.text().then((errorMessage) => {
      const errorObject = JSON.parse(errorMessage);
      return Promise.reject(`${errorObject.message}`);
    });
  }
  return res.json();
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email, name: name }),
  }).then((res) => _getResponseData(res));
};

export const login = (email, password) => {
  console.log(email, password);
  console.log(`${BASE_URL}/signin`);

  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
    credentials: "include",
  }).then((res) => _getResponseData(res));
};

export const getUser = (JWT) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
  }).then((res) => _getResponseData(res));
};

export const editUser = (name, email) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((res) => _getResponseData(res));
};

export const postMovie = (movie) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.thumbnail}`,
      movieId: movie.movieId,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => _getResponseData(res));
};

export const deleteMovie = (movieId) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => _getResponseData(res));
};

export const getMyMovies = () => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => _getResponseData(res));
};
