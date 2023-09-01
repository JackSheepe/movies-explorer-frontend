import React from "react";
import { Routes, Route } from "react-router-dom";
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
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.png";
import cover3 from "../images/cover3.png";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function useDocumentTitle(title) {
    React.useEffect(() => {
      document.title = title;
    }, [title]);
  }

  const [movies, setMovies] = React.useState([
    {
      cover: cover1,
      name: "default",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover2,
      name: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 43м",
      isLiked: true,
    },
    {
      cover: cover3,
      name: "В погоне за Бенкси",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover1,
      name: "default",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover2,
      name: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 43м",
      isLiked: true,
    },
    {
      cover: cover3,
      name: "В погоне за Бенкси",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover1,
      name: "default",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover2,
      name: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 43м",
      isLiked: true,
    },
    {
      cover: cover3,
      name: "В погоне за Бенкси",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover1,
      name: "default",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover2,
      name: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 43м",
      isLiked: true,
    },
    {
      cover: cover3,
      name: "В погоне за Бенкси",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover1,
      name: "default",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover2,
      name: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 43м",
      isLiked: true,
    },
    {
      cover: cover3,
      name: "В погоне за Бенкси",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover1,
      name: "default",
      time: "1ч 43м",
      isLiked: false,
    },
    {
      cover: cover2,
      name: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 43м",
      isLiked: true,
    },
    {
      cover: cover3,
      name: "В погоне за Бенкси",
      time: "1ч 43м",
      isLiked: false,
    },
  ]);

  return (
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
            <Movies movies={movies} useDocumentTitle={useDocumentTitle} />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies movies={movies} useDocumentTitle={useDocumentTitle} />
          }
        />
        <Route
          path="/profile"
          element={<Profile useDocumentTitle={useDocumentTitle} />}
        />
        <Route
          path="/signin"
          element={<Login useDocumentTitle={useDocumentTitle} />}
        />
        <Route
          path="/signup"
          element={<Register useDocumentTitle={useDocumentTitle} />}
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
    </div>
  );
}

export default App;
