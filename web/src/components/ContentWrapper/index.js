import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function ContentWrapper({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
