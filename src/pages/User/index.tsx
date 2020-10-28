import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiTwitter } from 'react-icons/fi';
import { GoMail, GoGlobe, GoLocation } from 'react-icons/go';

import api from '../../services/api';
import { UserInfo, About, SubTitle } from './styles';
import Header from '../../components/Header';
import ReposList from '../../components/ReposList';

interface UserParams {
  user: string;
}

interface User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  email: string;
  blog: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  full_name: string;
  description: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get(`users/${params.user}`).then(response => {
      setUser(response.data);
    });

    api.get(`users/${params.user}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, [params.user]);

  return (
    <>
      <Header />

      {user && (
        <UserInfo>
          <header>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </div>
          </header>
          <About>
            <ul>
              {user.location && (
                <li>
                  <GoLocation size={16} />
                  {user.location}
                </li>
              )}
              {user.email && (
                <li>
                  <GoMail size={16} />
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </li>
              )}
              {user.blog && (
                <li>
                  <GoGlobe size={16} />
                  <a href={user.blog}>{user.blog}</a>
                </li>
              )}
              {user.twitter_username && (
                <li>
                  <FiTwitter size={16} />
                  <a href={`https://twitter.com/${user.twitter_username}`}>
                    {user.twitter_username}
                  </a>
                </li>
              )}
            </ul>
          </About>
          <ul>
            <li>
              <strong>{user.followers}</strong>
              <span>Seguidores</span>
            </li>
            <li>
              <strong>{user.following}</strong>
              <span>Seguindo</span>
            </li>
            <li>
              <strong>{user.public_repos}</strong>
              <span>Repositórios</span>
            </li>
          </ul>
        </UserInfo>
      )}

      <SubTitle>Repositórios</SubTitle>
      {repositories && <ReposList repositories={repositories} />}
    </>
  );
};

export default User;
