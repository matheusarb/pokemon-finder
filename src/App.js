import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonRow from "./PokemonRow";
import PokemonInfo from "./PokemonInfo";

//import pokemon from "./public/pokemon.json";

function App() {
  //REACT HOOK -- read React documentation
  //useState() returns an array that has two items in it
  //first is the current state
  //the second is a function that sets the first state
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/react-pokemon-finder/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  const onFilterChange = (event) => {
    filterSet(event.target.value);
  };

  return (
    <div className="main-style">
      <h1 className="title">Pokemon Finder</h1>
      <div className="pokemon-table-grid">
        <div>
          <input value={filter} onChange={onFilterChange} className="input" />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice()
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
