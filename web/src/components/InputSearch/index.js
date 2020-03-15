import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function InputSearch({
  handleKeyDown,
  handleChange,
  inputPlaceholder,
}) {
  return (
    <Container>
      <MdSearch color="#dddd" size={24} />
      <Input
        name="search"
        type="text"
        placeholder={inputPlaceholder}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  handleKeyDown: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
};
