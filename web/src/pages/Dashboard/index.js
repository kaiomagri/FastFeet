import React from 'react';
import { MdLens, MdMoreHoriz } from 'react-icons/md';

import {
  Container,
  Content,
  ContentTable,
  AvatarDeliveryman,
  StatusPoint,
  Action,
} from './styles';

import ContentHeader from '~/components/ContentHeader';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <ContentHeader
          title="Gerenciando encomendas"
          placeholder="Buscar por encomendas"
        />
        <ContentTable>
          <thead>
            <tr>
              <td>ID</td>
              <td>Destinatário</td>
              <td>Entregador</td>
              <td>Cidade</td>
              <td>Estado</td>
              <td>Status</td>
              <td>
                <Action>Ações</Action>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>
                <AvatarDeliveryman>
                  <img
                    src="https://api.adorable.io/avatars/100/abott@adorable.png"
                    alt="avatar"
                  />
                  <span>John Doe</span>
                </AvatarDeliveryman>
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <StatusPoint>
                  <MdLens color="#2ca42b" size={16} />
                  <span>ENTREGUE</span>
                </StatusPoint>
              </td>
              <td>
                <Action>
                  <MdMoreHoriz color="#C6C6C6" size={24} />
                </Action>
              </td>
            </tr>
            <tr>
              <td>#02</td>
              <td>Ludwig van Beethoven</td>
              <td>
                <AvatarDeliveryman>
                  <img
                    src="https://api.adorable.io/avatars/100/abott@adorable.png"
                    alt="avatar"
                  />
                  <span>John Doe</span>
                </AvatarDeliveryman>
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <StatusPoint>
                  <MdLens color="#2ca42b" size={16} />
                  <span>ENTREGUE</span>
                </StatusPoint>
              </td>
              <td>
                <Action>
                  <MdMoreHoriz color="#C6C6C6" size={24} />
                </Action>
              </td>
            </tr>
            <tr>
              <td>#03</td>
              <td>Ludwig van Beethoven</td>
              <td>
                <AvatarDeliveryman>
                  <img
                    src="https://api.adorable.io/avatars/100/abott@adorable.png"
                    alt="avatar"
                  />
                  <span>John Doe</span>
                </AvatarDeliveryman>
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <StatusPoint>
                  <MdLens color="#2ca42b" size={16} />
                  <span>ENTREGUE</span>
                </StatusPoint>
              </td>
              <td>
                <Action>
                  <MdMoreHoriz color="#C6C6C6" size={24} />
                </Action>
              </td>
            </tr>
          </tbody>
        </ContentTable>
      </Content>
    </Container>
  );
}
