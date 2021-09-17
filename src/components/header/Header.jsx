import React from "react";
import logo from "../../images/logo-one.png";
import menu from "../../images/menu.svg";
import notification from "../../images/notification.svg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo  "></div>
      <div className="header-menu    ">
        <div className="groupOne ">
          <img src={menu} alt="menu de página" className="menu" />
          <div className="barra"></div>
        </div>
        <div className="groupTwo  ">
          <img
            src={notification}
            alt="logo de notificación"
            className="notification"
          />
          <p>Cesar Avellaneda</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
