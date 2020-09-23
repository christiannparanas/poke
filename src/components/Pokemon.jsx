import React from "react";
import "../sass/Pokemon.scss";


function Pokemon({ name, img }) {
  // const [types, setTypes] = useState([]);

  // let aa = img;

  // useEffect(() => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${aa}/`).then((res) => {
  //     setTypes(res.data.types);
  //   });
  // }, []);

  return (
    <div className="pokemon-container">
      <div className="details">
        <div className="name">{name}</div>
        <div className="types">
          <div className="type">Grass</div>
        </div>
      </div>
      <div className="img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`}
          alt="pokeImg"
        />
      </div>
    </div>
  );
}

export default Pokemon;
