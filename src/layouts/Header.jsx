// import React from "react";
import "./header.css";

function Header() {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Movie Land
    </span>
  );
}

export default Header;
