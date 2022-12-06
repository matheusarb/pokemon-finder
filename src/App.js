import logo from "./logo.svg";
import "./App.css";
import pokemon from "./pokemon.json";
import PokemonRow from "./PokemonRow";

function App() {
  return (
    <div className="main-style">
      <h1 className="title">Pokemon Finder</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow pokemon={pokemon} key={pokemon.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
