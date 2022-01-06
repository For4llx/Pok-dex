import React from 'react';

interface Types {
  type1: string;
  type2?: string;
}

interface Props {
  types: Types;
}

const PokemonTypes: React.FC<Props> = function PokemonHeader({ types }) {
  return (
    <p>
      <em className="card__type card__type--orange">{types.type1}</em>
      {types.type2 ? (
        <em className="card__type card__type--gray">{types.type2}</em>
      ) : (
        ''
      )}
    </p>
  );
};

export default PokemonTypes;
