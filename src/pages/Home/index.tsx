import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Pokemons, Form } from './styles';

interface Pokemon{

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

  moves:[{
    version_group_details: [{
      version_group:{
        name: string;
        }
      }
    ]
  }
];

  sprites:{
    front_default: string;
  }
};

const Home: React.FC = () => {
  const [newPoke, setNewPoke] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    const response = await api.get<Pokemon>(`pokemon/${newPoke}`);
    const pokemon = response.data;
    setPokemons([...pokemons, pokemon]);

    setNewPoke('');
  };

  return (
    <>
    <Title>Pokédex</Title>

  <Form onSubmit={handleAddRepository} id="pesquisa">
    <input
    value={newPoke}
    onChange={e => setNewPoke(e.target.value)}
    placeholder="Digite o nome do Pokémon" />
      <button type="submit">Pesquisar</button>
  </Form>

   <Pokemons>
   {pokemons.map(pokemon => (
                  <a href={pokemon.name} id="main">
                    <img src={pokemon.sprites.front_default} alt = 'Sprite'/>
                    <div>
                        <strong>Name: {pokemon.name}</strong>
                        <br/><br/>
                        <p>Id: {pokemon.id}</p>
                        <p>Type: {pokemon.types.map(p => (
                            <span>{p.type.name} </span>
                          ))}</p>
                        <p>Version: {pokemon.moves[0].version_group_details[0].version_group.name}</p>
                    </div>
                  </a>))}

          </Pokemons>
     </>
    );
};

export default Home;
