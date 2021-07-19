import React, { useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { NavLink } from "react-router-dom";
import "./header.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";

export function Header({ name }) {
  const [meny, setMenu] = useState(false);
  const menuStyle = {

    left: meny ? '0' : '-300px'
  };
  const icoDiv = {
    marginLeft: meny ? "300px" : "100px",
    position: meny ? "fixed" : null,
    top: "0",
    left: "0",
    background: meny ? "white" : null,
  };
  return (
    <header>
      {!meny ? (
        <div className="menu-ico-header">
          <MenuIcon
            className="menu-ico-svg"
            onClick={() => setMenu(!meny)}
            style={icoDiv}
          />
        </div>
      ) : (
        <CloseIcon onClick={() => setMenu(!meny)} style={icoDiv} />
      )}

      <div className="menu" style={menuStyle}>
        <div className="person-menu">
          <PersonIcon className="user-ico" />
        </div>
        <NavLink to={"/"}>
          {" "}
          <div className="menu_border">
            <h2>Main</h2>
          </div>
        </NavLink>
        <NavLink to={"/photo"}>
          {" "}
          <div className="menu_border">
            <h2>Media</h2>
          </div>
        </NavLink>
        <NavLink to={"/test"}>
          {" "}
          <div className="menu_border">
            <h2>News</h2>
          </div>
        </NavLink>
      </div>

      <h1>
        <NavLink to={"/test"}>{name}</NavLink>
      </h1>


      <GitHubIcon className="git" />

    </header>
  );
}
