import React, { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { MdLens, MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Content,
  ContentHeader,
  ContentTable,
  AvatarDeliveryman,
  StatusPoint,
} from './styles';

import ActionList from '~/components/ActionList';
import SearchNotFound from '~/components/SearchNotFound';
import Spinner from '~/components/Spinner';

import ImgEmptyProduct from '~/assets/empty_product.svg';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  function updateDeliveries(response) {
    switch (response.status) {
      case 200:
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
        break;
      default:
        setDeliveries([]);
        break;
    }
    setLoading(false);
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');
      updateDeliveries(response);
    }
    loadDeliveries();
  }, []);

  async function defaultSearch(filter = product) {
    setLoading(true);
    const response = await api.get('deliveries', {
      params: {
        product: filter,
      },
    });
    updateDeliveries(response);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      defaultSearch();
    }
  }

  function handleChange(e) {
    setProduct(e.target.value);
    if (e.target.value === '') {
      defaultSearch(e.target.value);
    }
  }

  function getContent() {
    return deliveries.length > 0 ? (
      <ContentTable>
        <thead>
          <tr>
            <td>ID</td>
            <td>Destinatário</td>
            <td>Produto</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <td>
              <div>
                <span>Ações</span>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td>{`#${delivery.id}`}</td>
              <td>{delivery.recipient.name}</td>
              <td>{delivery.product}</td>
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
                <ActionList />
              </td>
            </tr>
          ))}
        </tbody>
      </ContentTable>
    ) : (
      <SearchNotFound
        text="Nenhum encomenda encontrada com o produto informado"
        imgPath={ImgEmptyProduct}
      />
    );
  }

  return (
    <Container>
      <Content>
        <strong>Gerenciando encomendas</strong>
        <ContentHeader>
          <div>
            <MdSearch color="#dddd" size={24} />
            <Input
              name="search"
              type="text"
              placeholder="Buscar por produto"
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            onClick={() => history.push('/deliveries/register')}
          >
            <MdAdd color="#fff" size={24} />
            <span>Cadastrar</span>
          </button>
        </ContentHeader>
        {loading ? <Spinner /> : getContent()}
      </Content>
    </Container>
  );
}
