import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface Repository {
  name: string;
  full_name: string;
  description: string;
}

interface ReposListProps {
  repositories: Array<Repository>;
}

const ReposList: React.FC<ReposListProps> = ({ repositories }) => {
  return (
    <Container>
      {repositories.map(repository => (
        <a href={`/repository/${repository.full_name}`} key={repository.name}>
          <div>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      ))}
    </Container>
  );
};

export default ReposList;
