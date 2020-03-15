import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function SearchNotFound({ imgPath, text }) {
  return (
    <Container>
      <img src={imgPath} alt="Search not found" />
      <h3>{text}</h3>
    </Container>
  );
}

SearchNotFound.propTypes = {
  text: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
};
