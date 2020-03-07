import React from 'react';

import { Container, Content } from './styles';

import ContentHeader from '~/components/ContentHeader';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <ContentHeader
          title="Gerenciando encomendas"
          placeholder="Buscar por encomendas"
        />
      </Content>
    </Container>
  );
}
