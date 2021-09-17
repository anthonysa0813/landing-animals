import React, { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import logo from "../../images/logo-one.png";

import menu from "../../images/menu.svg";
import notification from "../../images/notification.svg";
import "./header.css";

const Header = () => {
  const { usuario } = useContext(UsuarioContext);
  const { nombre, role, level } = usuario;
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
          <p>{nombre ? nombre : "Cesar Avellaneda"}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
