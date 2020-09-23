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
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`} alt="pokeImg" />
        
      </div>
    </div>
  );
}

export default Pokemon;
