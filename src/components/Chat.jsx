import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faUserPlus, faInfo } from "@fortawesome/free-solid-svg-icons";
import Messages from "./Messages";
import Input from "./input";

const chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <FontAwesomeIcon id="icons" icon={faVideo} />
          <FontAwesomeIcon id="icons" icon={faUserPlus} />
          <FontAwesomeIcon id="icons" icon={faInfo} />{" "}
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default chat;
