import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={require("../styles/img/gaivota_logo_oficial.png")}
          width="60"
          height="60"
          alt=""
        ></img>
      </Link>
    </nav>
  );
};
export default NavBar;
