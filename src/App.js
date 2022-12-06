import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
        border: "2px solid black",
      }}
    >
      <h1 className="title">Poke Finder1</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bulbasaur</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
