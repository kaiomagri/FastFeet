import React from 'react';

import { Container } from './styles';

export default function SearchNotFound({ imgPath, text }) {
  return (
    <Container>
      <img src={imgPath} alt="Search not found" />
      <h3>{text}</h3>
    </Container>
  );
}
