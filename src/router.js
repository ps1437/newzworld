import React, { Suspense, lazy } from "react";
import { Redirect, Route } from "react-router-dom";
const MainPage = lazy(() => import("./components/Main/MainPage"));
const Country = lazy(() => import("./components/Main/Country"));

const Routers = () => {
  return (
    <React.Fragment>
       <Route
          path="/newz/country"
          render={() => (
            <Suspense fallback= {<div className="loader"></div>}>
              <Country />{" "}
            </Suspense>
          )}
        />
        <Route
          path="/newz/headlines/:id"
          render={() => (
            <Suspense fallback= {<div className="loader"></div>}>
              <MainPage />{" "}
            </Suspense>
          )}
        />
        
        
        <Redirect from="/" to="/newz/headlines/headlines" />
    </React.Fragment>
  );
};

export default Routers;
