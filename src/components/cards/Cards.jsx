import React from "react";
import "./cards.css";
import avatar from "../../images/cards/avatar.png";
import diamond from "../../images/cards/diamonds.svg";
import heart from "../../images/cards/heart.svg";
import report from "../../images/cards/report.svg";

const Cards = () => {
  return (
    <div className="cards ">
      <div className="cardGround">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="card-info">
        <h3>Juan Antonio Puerto</h3>
        <p>Creative Designer</p>
        <p>Senior</p>
      </div>
      <div className="progress-content">
        <p>Progress</p>
        <p>20%</p>
      </div>
      <div className="progressContent">
        <div className="progress"></div>
      </div>
      <div className="progress-advance"></div>
      <hr />
      <div className="qualitiesContent ">
        <div className="quality">
          <img src={diamond} alt="" />
          <p>Hard skills</p>
        </div>
        <div className="quality">
          <img src={heart} alt="" />
          <p>Hard skills</p>
        </div>
        <div className="quality">
          <img src={report} alt="" />
          <p>Hard skills</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
