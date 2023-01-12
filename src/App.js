import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonRow from "./PokemonRow";
import PokemonInfo from "./PokemonInfo";
import styled from "@emotion/styled";

//import pokemon from "./public/pokemon.json";

const Title = styled.h1`
  text-align: center;
  color: rgb(85, 85, 85);
`;

const Pokemon_Table_Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

function App() {
  //REACT HOOK -- read React documentation
  //useState() returns an array that has two items in it
  //first is the current state
  //the second is a function that sets the first state
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/react-pokemon-finder/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  const onFilterChange = (event) => {
    filterSet(event.target.value);
  };

  return (
    <div className="main-style">
      <Title>Pokemon Finder</Title>
      <Pokemon_Table_Grid>
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
      </Pokemon_Table_Grid>
    </div>
  );
}

export default App;
