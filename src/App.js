import React, { useState } from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import PokemonRow from "./PokemonRow";

function App() {
  //REACT HOOK
  //useState() returns an array that has two items in it
  //first is the current state
  //the second is a function that sets the first state
  const [filter, filterSet] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

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
                .slice(0, 10)
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
        {selectedItem && (
          <div>
            <h1>{selectedItem.name.english}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
