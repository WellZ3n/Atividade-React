import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Pokemons, Form, Error } from './styles';

interface Pokemon{

version_group: {
    name: string;
  },

  id: string;
  name: string;
  forms: {
    url: string;
  };

  types: [{
    type:{
      name: string;
    }
  }
];

  sprites:{
    front_default: string;
  }
};

const Home: React.FC = () => {
  const [newPoke, setNewPoke] = useState('');
  const [inputError, setInputError] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    if(!newPoke){
      setInputError("Digite um pokémon/id para pesquisar.");
      return;
    }
    try {
      const response = await api.get<Pokemon>(`pokemon-form/${newPoke}/`);
      const pokemon = response.data;

      setPokemons([...pokemons, pokemon]);
      setNewPoke('');
      setInputError('');

    } catch (err) {
      setInputError ("Pokémon não encontrado ou inexistente")
    }
  };

  return (
    <>
    <Title>Pokédex</Title>

  <Form hasError= { !!inputError } onSubmit={handleAddRepository}>
    <input
    value={newPoke}
    onChange={e => setNewPoke(e.target.value)}
    placeholder="Digite o nome do Pokémon" />
      <button type="submit">Pesquisar</button>
  </Form>

  {inputError && <Error>{inputError}</Error>}

   <Pokemons>
   {pokemons.map(pokemon => (
                  <a key={pokemon.name} href={"https://www.pokemon.com/br/pokedex/" + pokemon.id} id="main">
                    <img src={pokemon.sprites.front_default} alt = 'Sprite'/>
                    <div>
                        <strong>Name: {pokemon.name}</strong>
                        <br/><br/>
                        <p>Id: {pokemon.id}</p>
                        <p>Type: {pokemon.types.map(p => (
                            <span>{p.type.name} </span>
                          ))}</p>
                        <p>Version: {pokemon.version_group.name}</p>
                    </div>
                  </a>))}

          </Pokemons>
     </>
    );
};

export default Home;
