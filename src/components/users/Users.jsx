import React from "react";
import path from "../../images/users/path.svg";
import craft from "../../images/users/craft.svg";
import people from "../../images/users/people.svg";
import searchIcon from "../../images/users/searchIcon.svg";
import "./users.css";
import Cards from "../cards/Cards";
import SearchInput from "./SearchInput";

const Users = () => {
  return (
    <main className="">
      <div className="main-content ">
        <div className="wrapper">
          <div className="user-content">
            <div className="user-links">
              <img src={path} alt="" />
              <p>Pathfindees</p>
            </div>
            <div className="user-links ">
              <img src={craft} alt="" />
              <p>Craft people</p>
            </div>
            <div className="user-links">
              <img src={people} alt="" />
              <p>People in charge</p>
            </div>
          </div>
          <div className="title-block ">
            <h1>Pathfindees |</h1>

            <SearchInput />
          </div>
          <div className="contenedorCards ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Users;
