import React, { useState, useEffect } from "react";
import axios from "axios";

import "./sass/App.scss";

import Pokemon from "./components/Pokemon";
import Nav from "./components/Nav";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getAllPokemons() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res => {
      console.log(res.data.results)
      setPokemons(res.data.results)
    })
  };

  
  let a = 0  

  return (
    <div className="App">
      <Nav />

      <div className="allpoke">
        {pokemons.map((pokemon) => {
          a++
          return (
            <Pokemon
              key={pokemon.name}
              name={pokemon.name}
              img={a}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
