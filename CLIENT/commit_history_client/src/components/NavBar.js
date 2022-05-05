import "../assets/styles/NavBar.css";

import React from "react";
import githubLogo from "../assets/images/github-2.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        alt="githubLogo"
        style={{ height: "60px", width: "60px" }}
        src={githubLogo}
      />
      <h1>GitHub Commit History App.</h1>
    </div>
  );
};

export default NavBar;
