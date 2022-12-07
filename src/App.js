import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import pokemon from "./pokemon.json";
import PokemonRow from "./PokemonRow";

function App() {
  //REACT HOOK
  //useState() returns an array that has two items in it
  //first is the current state
  //the second is a function that sets the first state
  const [filter, filterSet] = useState("");

  const onFilterChange = (event) => {
    filterSet(event.target.value);
  };

  return (
    <div className="main-style">
      <h1 className="title">Pokemon Finder</h1>
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
              pokemon.name.english.toLowerCase().includes(filter)
            )
            .slice(0, 10)
            .map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
