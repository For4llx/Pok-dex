import React from 'react';

interface Stats {
  hp: number;
  at: number;
  def: number;
}

interface Props {
  stats: Stats;
}

const PokemonStats: React.FC<Props> = function PokemonStats({ stats }) {
  return (
    <section>
      <h2 className="card__stats">Stats:</h2>
      <ul className="card__ul">
        <li className="card__stats-list card__stats-list--green">
          {`${stats.hp} hp`}
        </li>
        <li className="card__stats-list card__stats-list--red">
          {`${stats.at} at`}
        </li>
        <li className="card__stats-list card__stats-list--blue">
          {`${stats.def} def`}
        </li>
      </ul>
    </section>
  );
};

export default PokemonStats;
