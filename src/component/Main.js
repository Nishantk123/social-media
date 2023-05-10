import React from "react";
import Header from "./Header";
import Upper from "./Upper";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Middle from "./Middle";
const Main = () => {
  return (
    <div>
      <Header />
      <Upper />
      <div id="main-content">
        <div class="tb container-fluid">
          <div className="row">
            <div className="col-sm-3 mt-5">
              <LeftSide />
            </div>
            <div className="col-sm-7">
              <Middle />
            </div>
            <div className="col-sm-2 d-none d-md-block ">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
      {/* <div id="device-bar-2"><i class="fab fa-apple"></i></div> */}
    </div>
  );
};
export default Main;
