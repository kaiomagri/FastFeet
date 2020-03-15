import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import InputSearch from '~/components/InputSearch';
import BtnRegister from '~/components/BtnRegister';

export default function PageHeader({
  title,
  handleKeyDown,
  handleChange,
  inputPlaceholder,
  registerPath,
}) {
  return (
    <Container>
      <strong>{title}</strong>
      <div>
        <InputSearch
          inputPlaceholder={inputPlaceholder}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
        <BtnRegister registerPath={registerPath} />
      </div>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  registerPath: PropTypes.string.isRequired,
};
