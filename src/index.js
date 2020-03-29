import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ""}>

<App />
</BrowserRouter>
, document.getElementById("root"));
