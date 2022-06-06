import React, { useState, useEffect } from "react";

import "../styles/Cards.css";

export default function Cards() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?limit=11&ts=1000&apikey=34b6c1513a5ecdb2c85d6a020385aaca&hash=2811dea7d88efaba9a48a48892a7bc64"
    )
      .then((response) => response.json())
      .then((personajes) => personajes.data.results)
      .then((item) => {
        let nItem = item.filter(
          (element) => !element.thumbnail.path.includes("image_not_available")
        );

        setPersonajes(nItem);
      });
  }, []);

  return (
    <>
      <div className="container">
        {personajes.map((personaje) => (
          <a className="item">
            <img
              className="character"
              src={
                personaje.thumbnail.path + "." + personaje.thumbnail.extension
              }
              key={personaje.id}
            />
          </a>
        ))}
      </div>
    </>
  );
}
