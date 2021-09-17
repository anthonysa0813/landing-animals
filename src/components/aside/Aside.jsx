import React from "react";
import plus from "../../images/plus.svg";
import overview from "../../images/overview_btn.svg";
import matrix from "../../images/matrix.svg";
import settings from "../../images/settings.svg";
import "./aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="">
      <nav className="">
        <ul className="">
          <Link className="link  " to="/">
            <img src={overview} alt="" />
          </Link>
          <Link className="link" to="/skills">
            <img src={matrix} alt="" />
            <p>My skill Matrix</p>
          </Link>
          <Link className="link" to="/new-user">
            <img src={plus} alt="" />
            <p>Create</p>
          </Link>
        </ul>
      </nav>
      <div className="settings-content  ">
        <div className="line-separate"></div>
        <div className="settings ">
          <img src={settings} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
