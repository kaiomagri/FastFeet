import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <FaSpinner color="#99999" size={36} />
    </Container>
  );
}
