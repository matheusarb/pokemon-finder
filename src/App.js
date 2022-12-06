import logo from "./logo.svg";
import "./App.css";
import pokemon from "./pokemon.json";

function App() {
  return (
    <div className="main-style">
      <h1 className="title">Poke Finder1</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemon) => (
            <tr>
              <td></td>
              <td>Grass, Poison</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
