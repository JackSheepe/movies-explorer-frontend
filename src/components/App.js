import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ApiError from "./ApiError/ApiError";
import ProtectedRoute from "../utils/ProtectedRoute";
import { moviesApi } from "../utils/MoviesApi";
import * as MainApi from "../utils/MainApi";
import { CurrentUserContext } from "../context/CurrentUserContext.js";

function App() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = React.useState(true);
  const currentUserContext = React.useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = React.useState(currentUserContext);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isSearchDone, setIsSearchDone] = React.useState(
    localStorage.getItem("isSearchDone") === "true"
  );
  const [isApiErrorOpen, setIsApiErrorOpen] = React.useState(false);
  const [errText, setErrText] = React.useState(
    "Что-то пошло не так! Попробуйте еще раз."
  );

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function useDocumentTitle(title) {
    React.useEffect(() => {
      document.title = title;
    }, [title]);
  }

  React.useEffect(() => {
    tokenCheck(jwt);
  }, [loggedIn, jwt]);

  const tokenCheck = (jwt) => {
    console.log(jwt);
    if (jwt) {
      MainApi.getUser(jwt)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch(console.error);
    } else {
      setLoggedIn(false);
    }
  };

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        console.log(res);
        if (res.error) {
          setIsApiErrorOpen(true);
        } else {
          console.log(res);
          setLoggedIn(true);
          localStorage.setItem("token", res.token);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setErrText(err);
        setIsApiErrorOpen(true);
      });
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        console.log(res);
        if (res.error) {
          setIsApiErrorOpen(true);
        } else {
          console.log(res);
          navigate("/signin", { replace: true });
        }
      })
      .catch((err) => {
        console.error(err);
        setErrText(err);
        setIsApiErrorOpen(true);
      });
  }

  function handleEditUser(name, email) {
    MainApi.editUser(name, email)
      .then((res) => {
        console.log(res);
        if (res.error) {
          setIsApiErrorOpen(true);
        } else {
          console.log(res);
          navigate("/profile", { replace: true });
        }
      })
      .catch((err) => {
        console.error(err);
        setErrText(err);
        setIsApiErrorOpen(true);
      });
  }

  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  React.useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const [resultsOfMoviesSearch, setResultsOfMoviesSearch] = React.useState(
    JSON.parse(localStorage.getItem("results")) || []
  );

  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem("savedMovies")) || []
  );
  React.useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const [resultsOfSavedMoviesSearch, setResultsOfSavedMoviesSearch] =
    React.useState([]);

  React.useEffect(() => {
    console.log(savedMovies);

    if (jwt && savedMovies.length === 0) {
      MainApi.getMyMovies()
        .then((data) => {
          const moviesFromApi = data;
          moviesFromApi.forEach((movie) => {
            movie.isLiked = true;
          });
          console.log(data);
          const results = moviesFromApi.filter(
            (obj) => obj.owner === currentUser._id
          );
          setSavedMovies(results);
          localStorage.setItem("savedMovies", JSON.stringify(results));
          setIsSearching(false);
          console.log(savedMovies);
        })
        .catch((err) => {
          console.error(err);
          setErrText(err);
          setIsApiErrorOpen(true);
          setIsSearching(false);
        });
    }
  }, [currentUser, movies]);

  React.useEffect(() => {
    localStorage.setItem("isSearchDone", isSearchDone);
  }, [isSearchDone]);

  function handleSearch(searchQuery, isChecked, regex) {
    setIsSearching(true);
    console.log(movies);

    if (movies.length === 0) {
      console.log(movies);
      moviesApi
        .getMovies()
        .then((data) => {
          const moviesFromApi = data;
          moviesFromApi.forEach((movie) => {
            movie.isLiked = false;
            movie.owner = currentUser._id;
            movie.movieId = movie.id;
          });
          setMovies(moviesFromApi);
          localStorage.setItem("movies", JSON.stringify(moviesFromApi));
          const results = moviesFromApi.filter((movie) => {
            const durationCondition = isChecked ? movie.duration <= 40 : true;
            return (
              (regex.test(movie.nameRU) || regex.test(movie.nameEN)) &&
              durationCondition
            );
          });
          setResultsOfMoviesSearch(results);
          localStorage.setItem("results", JSON.stringify(results));
          setIsSearching(false);
          setIsSearchDone(true);
          console.log(resultsOfMoviesSearch);
        })
        .catch((err) => {
          console.log(err);
          setErrText(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
          setIsApiErrorOpen(true);
          setIsSearching(false);
        });
    } else {
      console.log(movies);
      setIsSearching(true);
      const results = movies.filter((movie) => {
        const durationCondition = isChecked ? movie.duration <= 40 : true;
        return (
          (regex.test(movie.nameRU) || regex.test(movie.nameEN)) &&
          durationCondition
        );
      });
      setResultsOfMoviesSearch(results);
      localStorage.setItem("results", JSON.stringify(results));
      console.log(resultsOfMoviesSearch);
      setIsSearching(false);
    }
  }

  function handleSavedMoviesSearch(isChecked, regex) {
    setIsSearching(true);
    const results = savedMovies.filter((movie) => {
      const durationCondition = isChecked ? movie.duration <= 40 : true;
      return (
        (regex.test(movie.nameRU) || regex.test(movie.nameEN)) &&
        durationCondition
      );
    });
    setResultsOfSavedMoviesSearch(results);
    console.log(resultsOfSavedMoviesSearch);
    setIsSearching(false);
  }

  function handleLogout() {
    localStorage.removeItem("movies");
    localStorage.removeItem("results");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("isSearchDone");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("isChecked");
    localStorage.removeItem("token");
    setLoggedIn(false);

    navigate("/", { replace: true });
    window.location.reload();
  }

  function handleMovieLike(movie, isLiked) {
    !isLiked
      ? MainApi.postMovie(movie)
          .then((res) => {
            console.log(res);
            if (res.error) {
              setIsApiErrorOpen(true);
            } else {
              console.log(res);
              const updatedMovies = movies.map((m) => {
                if (m.movieId === movie.movieId) {
                  return {
                    ...m,
                    isLiked: !m.isLiked,
                  };
                }
                return m;
              });
              setMovies(updatedMovies);
            }
          })
          .catch((err) => {
            console.error(err);
            setErrText(err);
            setIsApiErrorOpen(true);
          })
      : MainApi.deleteMovie(movie.movieId)
          .then((res) => {
            console.log(res);
            if (res.error) {
              setIsApiErrorOpen(true);
            } else {
              console.log(res);
              const updatedMovies = movies.map((m) => {
                if (m._id === movie._id) {
                  return {
                    ...m,
                    isLiked: !m.isLiked,
                  };
                }
                return m;
              });
              const updatedSavedMovies = savedMovies.map((m) => {
                console.log(m);
                console.log(movie);
                if (m._id === movie._id) {
                  return {
                    ...m,
                    isLiked: !m.isLiked,
                  };
                }
                return m;
              });
              setMovies(updatedMovies);
              setSavedMovies(updatedSavedMovies);
            }
          })
          .catch((err) => {
            console.error(err);
            setErrText(err);
            setIsApiErrorOpen(true);
          });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header
          isBurgerMenuOpen={isBurgerMenuOpen}
          loggedIn={loggedIn}
          onBurgerClick={handleBurgerMenuClick}
        />
        <Routes>
          <Route
            path="/"
            element={<Main useDocumentTitle={useDocumentTitle} />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  movies={movies}
                  useDocumentTitle={useDocumentTitle}
                  onSearch={handleSearch}
                  isSearching={isSearching}
                  isSearchDone={isSearchDone}
                  resultsOfMoviesSearch={resultsOfMoviesSearch}
                  onLike={handleMovieLike}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  savedMovies={savedMovies}
                  resultsOfSavedMoviesSearch={resultsOfSavedMoviesSearch}
                  useDocumentTitle={useDocumentTitle}
                  onSavedMoviesSearch={handleSavedMoviesSearch}
                  onLike={handleMovieLike}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  useDocumentTitle={useDocumentTitle}
                  onLogout={handleLogout}
                  onSubmit={handleEditUser}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                useDocumentTitle={useDocumentTitle}
                onLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                useDocumentTitle={useDocumentTitle}
                onRegister={handleRegister}
              />
            }
          />
          <Route
            path="*"
            element={<NotFound useDocumentTitle={useDocumentTitle} />}
          />
        </Routes>
        <Footer />
        <BurgerMenu
          isBurgerMenuOpen={isBurgerMenuOpen}
          loggedIn={loggedIn}
          onBurgerClick={handleBurgerMenuClick}
        />
        <ApiError
          isApiErrorOpen={isApiErrorOpen}
          setIsApiErrorOpen={setIsApiErrorOpen}
          errText={errText}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
