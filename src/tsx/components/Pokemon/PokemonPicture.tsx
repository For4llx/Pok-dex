import React from 'react';

interface Props {
  picture: string;
  name: string;
}

const PokemonPicture: React.FC<Props> = function PokemonPicture({
  picture,
  name,
}) {
  return <img className="card__img" src={picture} alt={name} />;
};

export default PokemonPicture;
