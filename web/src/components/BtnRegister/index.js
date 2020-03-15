import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function BtnRegister({ registerPath }) {
  return (
    <Container type="button" onClick={() => history.push(registerPath)}>
      <MdAdd color="#fff" size={24} />
      <span>Cadastrar</span>
    </Container>
  );
}

BtnRegister.propTypes = {
  registerPath: PropTypes.string.isRequired,
};
