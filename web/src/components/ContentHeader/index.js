import React from 'react';

import PropTypes from 'prop-types';

import { Input } from '@rocketseat/unform';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function ContentHeader({ title, placeholder }) {
  return (
    <>
      <strong>{title}</strong>
      <Container>
        <div>
          <MdSearch className="icon-search" color="#dddd" size={24} />
          <Input name="search" type="text" placeholder={placeholder} />
        </div>
        <button type="button">
          <MdAdd color="#fff" size={24} />
          <span>Cadastrar</span>
        </button>
      </Container>
    </>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
