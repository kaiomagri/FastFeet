import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import ContentWrapper from '~/components/ContentWrapper';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
