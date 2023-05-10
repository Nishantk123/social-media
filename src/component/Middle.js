import React from "react";
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PeopleIcon from '@mui/icons-material/People';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ExploreIcon from '@mui/icons-material/Explore';
import ArchiveIcon from '@mui/icons-material/Archive';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubjectIcon from '@mui/icons-material/Subject';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Post from "./Post";
const Middle = () =>{
    const post_list = [
        "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIpAt8211_DCp5rMAVhu-RQIe9gTu_r9piw&usqp=CAU",
        "https://cdn.pixabay.com/photo/2014/08/22/15/27/facebook-424521_960_720.jpg",
        "https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"
    ]
    return(
        <div className="td" id="">
            <div className="m-mrg" id="p-tabs">
              <div className="tb">
                <div className="td">
                  <div className="tb" id="p-tabs-m">
                    <div className="td active">
                      {/* <i className="material-icons">av_timer</i> */}
                      <AvTimerIcon />
                      <span id="p-name">TIMELINE</span>
                    </div>
                    <div className="td">
                      {/* <i className="material-icons">people</i> */}
                      <PeopleIcon />
                      <span id="p-name">FRIENDS</span>
                    </div>
                    <div className="td">
                      {/* <i className="material-icons">photo</i> */}
                      <InsertPhotoIcon />
                      <span id="p-name">PHOTOS</span>
                    </div>
                    <div className="td">
                      {/* <i className="material-icons">explore</i> */}
                      <ExploreIcon />
                      <span id="p-name">ABOUT</span>
                    </div>
                    <div className="td">
                      {/* <i className="material-icons">archive</i> */}
                      <ArchiveIcon />
                      <span id="p-name">ARCHIVE</span>
                    </div>
                  </div>
                </div>
                <div className="td" id="p-tab-m">
                  {/* <i className="material-icons">keyboard_arrow_down</i> */}
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
            <div className="m-mrg" id="composer">
              <div id="c-tabs-cvr">
                <div className="tb" id="c-tabs">
                  <div className="td active">
                    {/* <i className="material-icons">subject</i> */}
                    <SubjectIcon />
                    <span id="p-name">Make Post</span>
                  </div>
                  <div className="td">
                    {/* <i className="material-icons">camera_enhance</i> */}
                    <CameraEnhanceIcon />
                    <span id="p-name">Photo/Video</span>
                  </div>
                  <div className="td">
                    {/* <i className="material-icons">videocam</i> */}
                    <VideocamIcon />
                    <span id="p-name">Live Video</span>
                  </div>
                  <div className="td">
                    {/* <i className="material-icons">event</i> */}
                    <EventIcon />
                    <span id="p-name">Life Event</span>
                  </div>
                </div>
              </div>
              <div id="c-c-main">
                <div className="tb">
                  <div className="td" id="p-c-i">
                    <img
                      src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"
                      alt="Profile pic"
                    />
                  </div>
                  <div className="td" id="c-inp">
                    <input type="text" placeholder="What's on your mind?" />
                  </div>
                </div>
                <div id="insert_emoji">
                  {/* <i className="material-icons">insert_emoticon</i> */}
                  <InsertEmoticonIcon />
                </div>
              </div>
            </div>
            {
                post_list.map((data, index)=>{
                    return(
                        <div classNameName="mt-3">
                            <Post image={data}/>
                        </div>
                    )
                })
            }
          </div>
    )
}

export default Middle;