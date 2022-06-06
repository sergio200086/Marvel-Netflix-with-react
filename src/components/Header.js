import React, { useState, useEffect } from "react";

import "../styles/Header.css";
export default function Header() {
  return (
    <>
      <div className="Header">
        <div className="left">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          />
          <span>Personajes</span>
          <span>Comics</span>
          <span>Series</span>
        </div>
      </div>
    </>
  );
}
