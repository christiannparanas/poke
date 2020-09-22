import React, { useState, useEffect } from "react";
import axios from "axios";

import "./sass/App.scss";

import Pokemon from "./components/Pokemon";
import Nav from "./components/Nav";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
    console.log(pokemons);
  }, []);

  const getAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => {
        setPokemons(res.data.results);
        mergeInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mergeInfo = () => {
    pokemons.forEach((element) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
        .then((res) => {
          element.infos = res.data;
        });
    });
  };

  return (
    <div className="App">
      <Nav />

      <div className="allpoke">
        {pokemons.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.name}
              name={pokemon.name}
              img={pokemon.infos.sprites.front_default}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
