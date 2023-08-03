import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faCamera } from "@fortawesome/free-solid-svg-icons";

const input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <FontAwesomeIcon id="icon" icon={faPaperclip} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon id="icon" icon={faCamera} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default input;
