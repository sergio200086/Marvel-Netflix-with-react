import React from "react";

import "./App.css";

import Header from "./components/Header";
import Cards from "./components/Cards";
import FeaturedCharacter from "./components/FeaturedCharacter";
function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-content">
        <FeaturedCharacter />
        <Cards />
      </section>
    </div>
  );
}

export default App;
