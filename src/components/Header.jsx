import React from "react";
import logo from "../images/logo-one.png";
import menu from "../images/menu.svg";
import notification from "../images/notification.svg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo ">
        <img src={logo} alt="Logo de la página" />
      </div>
      <div className="header-menu ">
        <img src={menu} alt="menu de página" className="menu" />
        <div className="barra"></div>
        <img
          src={notification}
          alt="logo de notificación"
          className="notification"
        />
        <p>Cesar Avellaneda</p>
      </div>
    </header>
  );
};

export default Header;
