import React, { useEffect, useState } from 'react';
import { MdLens, MdMoreHoriz } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Content,
  ContentTable,
  AvatarDeliveryman,
  StatusPoint,
  Action,
} from './styles';

import ContentHeader from '~/components/ContentHeader';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      if (response.data) {
        const data = response.data.map(delivery => {
          let status = 'PENDENTE';
          let backColor = '#F0F0DF';
          let textColor = '#C1BC35';

          if (delivery.canceled_at) {
            status = 'CANCELADA';
            backColor = '#FAB0B0';
            textColor = '#DE3B3B';
          } else if (delivery.end_date) {
            status = 'ENTREGUE';
            backColor = '#DFF0DF';
            textColor = '#2CA42B';
          } else if (delivery.start_date) {
            status = 'RETIRADA';
            backColor = '#BAD2FF';
            textColor = '#4D85EE';
          }
          const nameSplited = delivery.deliveryman.name.split(' ');
          const deliverymanInitials = `${nameSplited[0][0]}${
            nameSplited[nameSplited.length - 1][0]
          }`;

          return {
            ...delivery,
            status,
            deliverymanInitials,
            backColor,
            textColor,
          };
        });
        setDeliveries(data);
      }
    }

    loadDeliveries();
  }, []);

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
            {deliveries.map(delivery => (
              <tr>
                <td>{`#${delivery.id}`}</td>
                <td>{delivery.recipient.name}</td>
                <td>
                  <AvatarDeliveryman
                    backColor={delivery.backColor}
                    textColor={delivery.textColor}
                  >
                    {delivery.deliveryman.avatar ? (
                      <img
                        src={delivery.deliveryman.avatar.url}
                        alt={delivery.deliveryman.name}
                      />
                    ) : (
                      <div>
                        <span>{delivery.deliverymanInitials}</span>
                      </div>
                    )}
                    <span>{delivery.deliveryman.name}</span>
                  </AvatarDeliveryman>
                </td>
                <td>{delivery.recipient.city}</td>
                <td>{delivery.recipient.state}</td>
                <td>
                  <StatusPoint
                    backColor={delivery.backColor}
                    textColor={delivery.textColor}
                  >
                    <MdLens color={delivery.textColor} size={14} />
                    <span>{delivery.status}</span>
                  </StatusPoint>
                </td>
                <td>
                  <Action>
                    <MdMoreHoriz color="#C6C6C6" size={24} />
                  </Action>
                </td>
              </tr>
            ))}
          </tbody>
        </ContentTable>
      </Content>
    </Container>
  );
}
