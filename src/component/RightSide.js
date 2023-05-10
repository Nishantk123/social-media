import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
const RightSide = () =>{
    return(
        <div className="td text-center" id="r-col">
        <div id="chat-bar">
          <div id="chat-lb">
            {/* <i className="material-icons">contacts</i> */}
            <div className="text-white">Contacts</div>
          </div>
          <div id="cts">
            <div className="on-ct active">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" />
              </a>
            </div>
            <div className="on-ct active">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img923/332/1abR4H.png" />
              </a>
            </div>
            <div className="on-ct">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" />
              </a>
            </div>
            <div className="on-ct active">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img923/332/1abR4H.png" />
              </a>
            </div>
            <div className="on-ct active">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" />
              </a>
            </div>
            <div className="on-ct">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" />
              </a>
            </div>
            <div className="on-ct">
              <a href="#">
                <img src="https://imagizer.imageshack.com/img923/332/1abR4H.png" />
              </a>
            </div>
            <div className="on-ct" id="ct-sett">
              {/* <i className="material-icons">settings</i> */}
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>

    )
}

export default RightSide;