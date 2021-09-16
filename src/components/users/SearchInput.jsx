import React from "react";
import searchIcon from "../../images/users/searchIcon.svg";
import "./users.css";
const SearchInput = () => {
  return (
    <div className="searchInput ">
      <input type="text" placeholder="Search pathfindee" />
      <img src={searchIcon} alt="" />
    </div>
  );
};

export default SearchInput;
