import React, { useEffect, useState } from "react";

import "../styles/FeaturedCharacter.css";

export default function FeaturedCharacter() {
  return (
    <>
      <div className="featuredCharacter">
        <div className="leyend">
          <div className="title">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Spider-Man-PS4-2018.png" />
          </div>
          <div className="description">
            <p>
              American teenager Peter Parker, a poor sickly orphan, is bitten by
              a radioactive spider. As a result of the bite, he gains superhuman
              strength, speed, and agility, along with the ability to cling to
              walls, turning him into Spider-Man.
            </p>
          </div>
          <div className="icons">
            <i>Marvel Entertainment, Laura Ziskin Productions</i>
          </div>
        </div>
      </div>
    </>
  );
}
