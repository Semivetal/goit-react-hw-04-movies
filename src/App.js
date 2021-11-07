import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Appbar from "./components/Appbar/Appbar";
import styles from "./App.module.css";

const HomePageView = lazy(() =>
  import("./views/HomePageView.js" /* webpackChunkName: "home-view" */)
);
const MoviesPageView = lazy(() =>
  import("./views/MoviesPageView.js" /* webpackChunkName: "movies-page-view" */)
);
const NoSuchPageView = lazy(() =>
  import("./views/NoSuchPageView.js" /* webpackChunkName: "no-page-view" */)
);
const MovieInformationView = lazy(() =>
  import(
    "./views/MovieInformationView/MovieInformationView.js" /* webpackChunkName: "movie-information-view" */
  )
);

function App() {
  return (
    <div className={styles.container}>
      <Appbar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePageView />
          </Route>

          <Route exact path="/movies">
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieInformationView />
          </Route>

          <Route>
            <NoSuchPageView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
