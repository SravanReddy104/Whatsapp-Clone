import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://st1.bollywoodlife.com/wp-content/uploads/2022/06/prabhas1.jpg"></Avatar>
        <div className="sidebar__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <SearchIcon />
        <input type="text" placeholder="search the chat"></input>
      </div>
      <div className="sidebar__charts">
        {/* <h3>Add new Chart</h3> */}
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
          
      </div>
    </div>
  );
};

export default Sidebar;
