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

interface Tipo{
  type:{
    name: string;
  }
}

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

  <Form onSubmit={handleAddRepository}>
    <input
    value={newPoke}
    onChange={e => setNewPoke(e.target.value)}
    placeholder="Digite o nome do Pokémon" />
      <button type="submit">Pesquisar</button>
  </Form>

   <Pokemons>
   {pokemons.map(pokemon => (
                  <a href={pokemon.name}>
                    <img src={pokemon.sprites.front_default} alt = 'Sprite'/>
                    <div>
                        <strong>Name: {pokemon.name}</strong><br></br>
                        <strong>Id: {pokemon.id}</strong>
                        <p>Types: {pokemon.types[0].type.name}</p>
                        <p>Version: {pokemon.moves[0].version_group_details[0].version_group.name}</p>
                    </div>
                  </a>))}

          </Pokemons>
     </>
    );
};

export default Home;
