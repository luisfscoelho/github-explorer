import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Contaier } from './styles';

import logoIMG from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Contaier>
      <img src={logoIMG} alt="Github Explorer" />
      <Link to="/">
        <FiChevronLeft size={16} />
        voltar
      </Link>
    </Contaier>
  );
};

export default Header;
