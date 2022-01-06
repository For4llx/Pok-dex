import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PokemonCard: React.FC<Props> = function PokemonCard({ children }) {
  return <article className="card">{children}</article>;
};

export default PokemonCard;
