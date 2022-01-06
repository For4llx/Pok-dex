import React, { useState, useEffect } from 'react';
import PokemonCard from './components/Pokemon/PokemonCard';
import PokemonPicture from './components/Pokemon/PokemonPicture';
import PokemonName from './components/Pokemon/PokemonName';
import PokemonTypes from './components/Pokemon/PokemonTypes';
import PokemonStats from './components/Pokemon/PokemonStats';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import FieldInput from './components/FieldInput';
import '../css/style.css';

const App = function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [displayRename, setdisplayRename] = useState<any[]>([]);

  const getPokemons = async function getPokemons() {
    const responses: any = [];
    for (let i = 1; i <= 20; i += 1) {
      responses.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => {
          if (response.ok) return response.json();
          throw new Error('Erreur');
        }),
      );
    }
    Promise.all(responses).then((pokemon) => {
      setPokemons(pokemon);
    });
  };

  const handleRename = (event: any) => {
    const newPokemons = [...pokemons];
    const index = newPokemons.findIndex(
      // eslint-disable-next-line eqeqeq
      (pokemon) => pokemon.id == event.target.id,
    );
    newPokemons[index].name = event.target.value;
    setPokemons(newPokemons);
  };

  const handleDelete = (event: any) => {
    const newPokemons = [...pokemons];
    const index = newPokemons.findIndex(
      // eslint-disable-next-line eqeqeq
      (pokemon) => pokemon.id == event.target.id,
    );
    newPokemons.splice(index, 1);
    setPokemons(newPokemons);
  };

  const handleDisplay = (event: any) => {
    const newDisplay = [...displayRename];
    newDisplay[event.target.id] = true;
    setdisplayRename(newDisplay);
  };

  const handleHide = (event: any) => {
    const newDisplay = [...displayRename];
    newDisplay[event.target.id] = false;
    setdisplayRename(newDisplay);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons.map((pokemon: any) => (
        <PokemonCard key={pokemon.id}>
          <PokemonPicture
            picture={pokemon.sprites.front_default}
            name={pokemon.name}
          />
          <Wrapper variant="card__container">
            <Wrapper variant="card__data">
              <Wrapper variant="card__header">
                <PokemonName name={pokemon.name} />
                <PokemonTypes
                  types={{
                    type1: pokemon.types[0].type.name,
                    type2: '',
                  }}
                />
              </Wrapper>
              <PokemonStats
                stats={{
                  hp: pokemon.stats[0].base_stat,
                  at: pokemon.stats[1].base_stat,
                  def: pokemon.stats[2].base_stat,
                }}
              />
            </Wrapper>
            <Wrapper variant="card__buttons-container">
              <Button
                id={pokemon.id}
                click={handleDisplay}
                variant="button button--cyan"
              >
                Rename
              </Button>
              <Button
                id={pokemon.id}
                click={handleDelete}
                variant="button button--red"
              >
                Delete
              </Button>
            </Wrapper>
          </Wrapper>
          {displayRename[pokemon.id] && (
            <Wrapper variant="rename">
              <FieldInput
                id={pokemon.id}
                name={pokemon.name}
                handleRename={handleRename}
              />
              <Button
                id={pokemon.id}
                click={handleHide}
                variant="button button--cyan"
              >
                Ok
              </Button>
            </Wrapper>
          )}
        </PokemonCard>
      ))}
    </div>
  );
};

export default App;
