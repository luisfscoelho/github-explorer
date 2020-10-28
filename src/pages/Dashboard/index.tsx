import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, SubTitle, Form, ItemsList, Error } from './styles';

import logoIMG from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface User {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const [newItem, setNewItem] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem('@GithubExplorer:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:users', JSON.stringify(users));
  }, [users]);

  const addRepository = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get<Repository>(`repos/${newItem}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewItem('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositório');
    }
  }, [newItem, repositories, setRepositories, setNewItem, setInputError]);

  const addUser = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get<User>(`users/${newItem}`);

      const user = response.data;

      setUsers([...users, user]);
      setNewItem('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse usuário');
    }
  }, [newItem, users, setUsers, setNewItem, setInputError]);

  const handleAdd = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!newItem) {
        setInputError('Digite o autor ou autor/nome do repositório');
        return;
      }

      if (newItem.includes('/')) {
        addRepository();
      } else {
        addUser();
      }
    },
    [newItem, addRepository, addUser],
  );

  return (
    <>
      <img src={logoIMG} alt="Github Explorer" />
      <Title>Explore usuários e repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAdd}>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Digite o nome do usuário o repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <SubTitle>Usuários</SubTitle>
      <ItemsList>
        {users.map(user => (
          <Link key={user.login} to={`/user/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </ItemsList>

      <SubTitle>Repositórios</SubTitle>
      <ItemsList>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </ItemsList>
    </>
  );
};

export default Dashboard;
