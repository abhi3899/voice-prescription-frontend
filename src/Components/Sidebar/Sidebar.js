import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { NoteRounded } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import ChatIcon from "@material-ui/icons/Chat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar_profileinfo">
          <h3>Abhinav Mishra</h3>
          <p>#@abhi3899</p>
        </div>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsheader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4></h4>
          </div>
          <AddIcon className="sidebar__addchannels" />
        </div>
        <div className="sidebar__channelslist">
          <div>
            <NoteRounded className="sidebar__note" />
            <h3>Prescription</h3>
          </div>
          <div>
            <GroupIcon className="sidebar__note" />
            <h3>Appointment</h3>
          </div>
          <div>
            <ChatIcon className="sidebar__note" />
            <h3>Chat</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
