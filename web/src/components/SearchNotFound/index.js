import React from 'react';
import PropTypes from 'prop-types';

import ImgSearchNotFound from '~/assets/search-not-found.png';

import { Container } from './styles';

export default function SearchNotFound({ text }) {
  return (
    <Container>
      <img src={ImgSearchNotFound} alt="Search not found" />
      <h3>{text}</h3>
    </Container>
  );
}

SearchNotFound.propTypes = {
  text: PropTypes.string.isRequired,
};
