import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoIMG from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoIMG} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22839492?s=460"
            alt="Luis Coelho"
          />
          <div>
            <strong>luiscoelho/myrepo</strong>
            <p>A project to do any thing!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22839492?s=460"
            alt="Luis Coelho"
          />
          <div>
            <strong>luiscoelho/myrepo</strong>
            <p>A project to do any thing!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22839492?s=460"
            alt="Luis Coelho"
          />
          <div>
            <strong>luiscoelho/myrepo</strong>
            <p>A project to do any thing!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
