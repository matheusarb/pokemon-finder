import React from "react";
import PropTypes from "prop-types";

const PokemonInfo = ({ name, base }) => {
  PokemonInfo.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.shape({
        english: PropTypes.string,
      }),
      base: PropTypes.shape({
        HP: PropTypes.number.isRequired,
        Attack: PropTypes.number.isRequired,
        Defense: PropTypes.number.isRequired,
        "Sp. Attack": PropTypes.number.isRequired,
        "Sp. Defense": PropTypes.number.isRequired,
        Speed: PropTypes.number.isRequired,
      }),
    }),
  };

  return (
    <div>
      <div>
        <h1>{name.english}</h1>
      </div>
      <table>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PokemonInfo;
