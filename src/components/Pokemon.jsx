import React from "react";
import "../sass/Pokemon.scss";

function Pokemon({ name, img }) {
  return (
    <div className="pokemon-container">
      <div className="details">
        <div className="name">{name}</div>
        <div className="type"></div>
      </div>
      <div className="img-container">
        <img src={img} alt="pokeImg"/>
      </div>
    </div>
  );
}

export default Pokemon;
