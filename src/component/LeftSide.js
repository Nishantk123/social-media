import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
const LeftSide = () => {
  return (
    <div className="td mb-5" id="l-col">
      <div className="l-cnt">
        <div className="cnt-label">
          <i className="l-i" id="l-i-i"></i>
          <span>Intro</span>
          <div className="lb-action">
            <EditIcon />
          </div>
        </div>
        <div id="i-box">
          <div id="intro-line">Front-end Engineer</div>
          <div id="u-occ">I love making applications with React.</div>
          <div id="u-loc">
            <LocationOnIcon />
            <a href="#">Bengaluru</a>, <a href="#">India</a>
          </div>
        </div>
      </div>
      <div className="l-cnt l-mrg">
        <div className="cnt-label">
          <i className="l-i" id="l-i-p"></i>
          <span>Photos</span>
          <div className="lb-action" id="b-i">
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div id="photos">
          <div className="tb">
            <div className="tr">
              <div className="td"></div>
              <div className="td"></div>
              <div className="td"></div>
            </div>
            <div className="tr">
              <div className="td"></div>
              <div className="td"></div>
              <div className="td"></div>
            </div>
            <div className="tr">
              <div className="td"></div>
              <div className="td"></div>
              <div className="td"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="l-cnt l-mrg">
        <div className="cnt-label">
          <i className="l-i" id="l-i-k"></i>
          <span>
            Did You Know<i id="k-nm">1</i>
          </span>
        </div>
        <div>
          <div className="q-ad-c">
            <a href="#" className="q-ad">
              <img src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png" />
              <span>My favorite superhero is...</span>
            </a>
          </div>
          <div className="q-ad-c">
            <a href="#" className="q-ad" id="add_q">
              <AddIcon />
              <span>Add Answer</span>
            </a>
          </div>
        </div>
      </div>
      <div id="t-box">
        <a href="#">Privacy</a> <a href="#">Terms</a>{" "}
        <a href="#">Advertising</a> <a href="#">Ad Choices</a>{" "}
        <a href="#">Cookies</a>{" "}
        <span id="t-more">
          More
          <KeyboardArrowDownIcon />
        </span>
        <div id="cpy-nt">
          Facebook &copy; <span id="curr-year"></span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
