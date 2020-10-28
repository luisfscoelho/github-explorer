import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { GoGlobe, GoLocation } from 'react-icons/go';

import api from '../../services/api';
import { Header, UserInfo, About, SubTitle } from './styles';
import ReposList from '../../components/ReposList';

import logoIMG from '../../assets/logo.svg';

interface UserParams {
  org: string;
}

interface User {
  login: string;
  avatar_url: string;
  name: string;
  description: string;
  location: string;
  blog: string;
}

interface Repository {
  name: string;
  full_name: string;
  description: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();
  const [organization, setOrganization] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get(`orgs/${params.org}`).then(response => {
      setOrganization(response.data);
    });

    api.get(`orgs/${params.org}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, [params.org]);

  return (
    <>
      <Header>
        <img src={logoIMG} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      {organization && (
        <UserInfo>
          <header>
            <img src={organization.avatar_url} alt={organization.login} />
            <div>
              <strong>{organization.name}</strong>
              <p>{organization.description}</p>
            </div>
          </header>
          <About>
            <ul>
              {organization.location && (
                <li>
                  <GoLocation size={16} />
                  {organization.location}
                </li>
              )}
              {organization.blog && (
                <li>
                  <GoGlobe size={16} />
                  <a href={organization.blog}>{organization.blog}</a>
                </li>
              )}
            </ul>
          </About>
        </UserInfo>
      )}

      <SubTitle>Repositórios</SubTitle>
      {repositories && <ReposList repositories={repositories} />}
    </>
  );
};

export default User;
