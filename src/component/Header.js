import React from "react";
import Icon from "@mui/material/Icon";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <header>
      <div className="tb">
        <div className="td" id="logo">
          <a href="#">
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
        <div className="d-none d-md-block" id="search-form">
          <form method="get" action="#">
            <input type="text" placeholder="Search Facebook" />
            <button type="submit" className="mt-3">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className=" td" id="f-name-l">
          <span>Nishant's facebook</span>
        </div>
        <div className="td" id="i-links">
          <div className="d-flex justify-content-end">
            <div className="" id="m-td">
              <div className="pt-1">
                <span className=" mx-2">
                  <PersonAddIcon fill="white" style={{ fill: "#ffffff" }} />
                </span>
                <span className=" mx-2">
                  <ChatBubbleIcon fill="white" style={{ fill: "#ffffff" }} />
                </span>
                <span className=" m-active mx-2">
                  <PersonAddIcon fill="white" style={{ fill: "#ffffff" }} />
                </span>
              </div>
            </div>
            <div className="">
              <a href="#" id="p-link">
                <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
