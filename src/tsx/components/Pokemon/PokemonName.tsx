import React from 'react';

interface Props {
  name: string;
}

const PokemonName: React.FC<Props> = function PokemonName({ name }) {
  return <h1 className="card__name">{name}</h1>;
};

export default PokemonName;
