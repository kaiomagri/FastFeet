import React from 'react';

import PropTypes from 'prop-types';

import { Input } from '@rocketseat/unform';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function ContentHeader({ title, placeholder }) {
  return (
    <Container>
      <strong>{title}</strong>
      <div>
        <Input name="search" type="text" placeholder={placeholder} />
        <button type="button">
          <MdAdd color="#fff" size={24} />
          <span>Cadastrar</span>
        </button>
      </div>
    </Container>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
