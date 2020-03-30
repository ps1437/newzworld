import React from "react";

export const Footer = props => {
  const { isSticky } = props;
  let classVal = "";
  if (isSticky) {
    classVal = "sticky fade-in";
  }
  return (
    <footer className={classVal}>
      @Syscho-2020
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank" 
          aria-label="github"
          href="https://github.com/ps1437"
          class="fa fa-github icon-link"
        ></a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          aria-label="email"
          href="mailto:praveen369soni@gmail.com"
          class="fa fa-google icon-link"
        ></a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          aria-label="linkedin"
          href="www.linkedin.com/in/praveen-soni-dev"
          class="fa fa-linkedin icon-link"
        ></a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          aria-label="facebook"
          href="https://www.facebook.com/psoni1437"
          class="fa fa-facebook-square "
        ></a>
      </span>
    </footer>
  );
};
