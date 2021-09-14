import React from "react";
import plus from "../images/plus.svg";
import overview from "../images/overview_btn.svg";
import matrix from "../images/matrix.svg";
import settings from "../images/settings.svg";
import "./aside.css";

const Aside = () => {
  return (
    <aside className="">
      <nav>
        <ul className="">
          <li>
            <img src={overview} alt="" />
          </li>
          <li>
            <img src={matrix} alt="" />
            My skill Matrix
          </li>
          <li>
            <img src={plus} alt="" />
            Create
          </li>
        </ul>
      </nav>
      <div className="settings-content ">
        <div className="line-separate"></div>
        <div className="settings">
          <img src={settings} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
