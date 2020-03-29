import React from "react";
import {  Link ,withRouter } from 'react-router-dom';

const Navbar = (props) => {
  const currentPath = props.location.pathname;
  return (
    <>
      <nav 	class="navbar navbar-expand-lg sticky-top  navbar-light  bg-light-nav">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
          <i class="fa fa-newspaper-o" aria-hidden="true"></i>
 &nbsp;&nbsp; NewsWorld
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className={"nav-item "+(currentPath==='/home' ? "active" : null)}>
              <Link className="nav-link" to={'/home'}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={"nav-item "+(currentPath==='/sports' ? "active" : null)}>
              <Link className="nav-link" to={'/sports'}>
                Sports
              </Link>
            </li>
            <li className={"nav-item "+(currentPath==='/country' ? "active" : null)}>
              <Link className="nav-link" to={'/country'}>
              Country
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
