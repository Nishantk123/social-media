import React from "react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LockIcon from '@mui/icons-material/Lock';
import CameraAltIcon from '@mui/icons-material/CameraAlt'

const Upper = () =>{
    return(
        <div id="profile-upper">
        <div id="profile-banner-image">
          <img
            src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg"
            alt="Banner image"
          />
        </div>
        <div id="profile-d">
          <div id="profile-pic">
            <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" />
          </div>
          <div id="u-name">Nishant kashyap</div>
          <div class="tb" id="m-btns">
            <div class="td">
              <div class="m-btn " id="p-name">
                {/* <i class="material-icons">format_list_bulleted</i> */}
                <FormatListBulletedIcon/>
                <span>Activity log</span>
              </div>
            </div>
            <div class="td">
              <div class="m-btn" id="p-name">
                {/* <i class="material-icons">lock</i> */}
                <LockIcon />
                <span>Privacy</span>
              </div>
            </div>
          </div>
          <div id="edit-profile">
            {/* <i class="material-icons">camera_alt</i> */}
            <div id="p-name">
                <CameraAltIcon  />
            </div>
          </div>
        </div>
        <div id="black-grd"></div>
      </div>
    )
}

export default Upper;