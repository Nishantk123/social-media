import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
const Post = ({image}) =>{
    return(
        <div>
        <div class="post">
          <div class="tb">
            <a href="#" class="td p-p-pic">
              <img
                src="https://imagizer.imageshack.com/img923/2452/zifFKH.jpg"
                alt="nishant's profile pic"
              />
            </a>
            <div class="td p-r-hdr">
              <div class="p-u-info">
                <a href="#">jay Singh</a> shared a memory with{" "}
                <a href="#">Mohan Singh</a>
              </div>
              <div class="p-dt">
                {/* <i class="material-icons">calendar_today</i> */}
                <CalendarTodayIcon />
                <span>January 28, 2023</span>
              </div>
            </div>
            <div class="td p-opt">
              {/* <i class="material-icons">keyboard_arrow_down</i> */}
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <a href="#" class="p-cnt-v">
            <img 
            src={image}
            // src="https://imagizer.imageshack.com/img923/8568/6LwtUa.jpg"
             />
          </a>
          <div>
            <div class="p-acts">
              <div class="p-act like">
                {/* <i class="material-icons">thumb_up_alt</i> */}
                <ThumbUpAltIcon />
                <span>25</span>
              </div>
              <div class="p-act comment">
                {/* <i class="material-icons">comment</i> */}
                <CommentIcon />
                <span>1</span>
              </div>
              <div class="p-act share">
                {/* <i class="material-icons">reply</i> */}
                <ReplyIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Post;