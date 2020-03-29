import React, { Suspense, lazy } from "react";
import { Redirect, Route } from "react-router-dom";


const MainPage = lazy(() => import("./components/Main/MainPage"));
const SportPage = lazy(() => import("./components/Main/SportPage"));
const Country = lazy(() => import("./components/Main/Country"));

const Routers = () => {
  return (
    <React.Fragment>
        <Route
          path="/home"
          render={() => (
            <Suspense fallback= {<div className="loader"></div>}>
              <MainPage />{" "}
            </Suspense>
          )}
        />
        <Route
          path="/sports"
          render={() => (
            <Suspense fallback= {<div className="loader"></div>}>
              <SportPage />{" "}
            </Suspense>
          )}
        />
        <Route
          path="/country"
          render={() => (
            <Suspense fallback= {<div className="loader"></div>}>
              <Country />{" "}
            </Suspense>
          )}
        />
        <Redirect from="/" to="/home" />
    </React.Fragment>
  );
};

export default Routers;
