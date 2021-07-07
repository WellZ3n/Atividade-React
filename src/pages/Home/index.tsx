import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Carteiras, Form } from './styles';

interface Carteiras{
  nome: string;
  atividade_principal: string;
  email: string;
  uf: string;
  municipio: string;
  cnpj: string;
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    setNewRepo('');
  };

  return (
    <>
    <Title>Lista de CNPJ</Title>

  <Form onSubmit={handleAddRepository}>
    <input
    value={newRepo}
    onChange={e => setNewRepo(e.target.value)}
    placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
  </Form>

   <Carteiras>
                  <a href="teste">

                    <div>
                        <strong>Git-Repo</strong>
                        <p>Meu primeiro projeto em React (05/07/2021)</p>
                    </div>
                  </a>

    {/**repositories.map(repository => (
                    <a>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                    </a>
    ))**/}
                    <a href="teste">

                     <div>
                        <strong>Nome: </strong>
                        <p>Atividade: </p>
                        <p>Email: </p>
                        <p>UF: </p>
                        <p>Município: </p>
                        <p>CNPJ: </p>
                     </div>
                  </a>
          </Carteiras>
     </>
    );
};

export default Home;
