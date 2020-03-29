import React from "react";
import Navbar from "../navbar/Navbar";
import { withRouter } from "react-router-dom";

const Layout = (props) => {
  return (
    <div >
     
      <Navbar />

      <div className="container">
           {props.children}
      </div>
    </div>
  );
};

export default withRouter(Layout);
