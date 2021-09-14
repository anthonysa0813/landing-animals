import React from "react";
import plus from "../images/plus.svg";
import overview from "../images/overview_btn.svg";
import matrix from "../images/matrix.svg";
import "./aside.css";

const Aside = () => {
  return (
    <aside>
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
    </aside>
  );
};

export default Aside;
