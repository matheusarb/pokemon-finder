import React, { useState } from "react";
import PropTypes from "prop-types";

const PokemonRow = ({ pokemon, onSelect }) => {
  PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.shape({
        english: PropTypes.string,
      }),
      type: PropTypes.arrayOf(PropTypes.string),
    }),
    onSelect: PropTypes.func,
  };

  // onSelect = (pokemon) => {
  //   setSelectedItem(pokemon);
  // };

  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select!</button>
      </td>
    </tr>
  );
};

export default PokemonRow;
