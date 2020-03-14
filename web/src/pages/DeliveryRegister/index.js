import React from 'react';
import { Form } from '@rocketseat/unform';
import { MdChevronLeft, MdDone } from 'react-icons/md';

import history from '~/services/history';

import { Container, Content, ContentHeader } from './styles';

export default function DeliveryRegister() {
  return (
    <Container>
      <Content>
        <strong>Gerenciando encomendas</strong>
        <ContentHeader>
          <div>
            <button type="button" onClick={() => history.push('/deliveries')}>
              <MdChevronLeft color="#fff" size={24} />
              <span>Voltar</span>
            </button>
            <button type="button">
              <MdDone color="#fff" size={24} />
              <span>Salvar</span>
            </button>
          </div>
        </ContentHeader>
        <Form />
      </Content>
    </Container>
  );
}
