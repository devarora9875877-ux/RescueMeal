import React from "react";
import "./NotFound.css";
import not from "../assets/images/not-found.png"

function NotFound() {
  return (
    <div className="notfound-full">
      <img 
        src={not} 
        alt="404 Error Page Not Found"
        className="notfound-full-image"
      />
    </div>
  );
}

export default NotFound;


