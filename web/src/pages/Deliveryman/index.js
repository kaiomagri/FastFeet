import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';
import PageHeader from '~/components/PageHeader';
import ActionList from '~/components/ActionList';
import SearchNotFound from '~/components/SearchNotFound';
import Spinner from '~/components/Spinner';
import AvatarDeliveryman from '~/components/AvatarDeliveryman';

export default function Deliveryman() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);

  function updateDeliverymans(response) {
    switch (response.status) {
      case 200:
        if (response.data) {
          const data = response.data.map(deliveryman => {
            const nameSplited = deliveryman.name.split(' ');
            const deliverymanInitials = `${nameSplited[0][0]}${
              nameSplited[nameSplited.length - 1][0]
            }`;

            return {
              ...deliveryman,
              deliverymanInitials,
            };
          });
          setDeliverymen(data);
        }
        break;
      default:
        setDeliverymen([]);
        break;
    }
    setLoading(false);
  }

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('deliverymans');
      updateDeliverymans(response);
    }
    loadDeliverymans();
  }, []);

  async function defaultSearch(filter = name) {
    setLoading(true);
    const response = await api.get('deliverymans', {
      params: {
        name: filter,
      },
    });
    updateDeliverymans(response);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      defaultSearch();
    }
  }

  function handleChange(e) {
    setName(e.target.value);
    if (e.target.value === '') {
      defaultSearch(e.target.value);
    }
  }

  function getContent() {
    return deliverymen.length > 0 ? (
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Foto</td>
            <td>Nome</td>
            <td>Email</td>
            <td>
              <div>
                <span>Ações</span>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>{`#${deliveryman.id}`}</td>
              <td>
                <AvatarDeliveryman
                  backColor="#eeee"
                  textColor="#444"
                  imgPath={deliveryman.avatar && deliveryman.avatar.url}
                  initials={deliveryman.deliverymanInitials}
                  name={deliveryman.name}
                  showName={false}
                />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionList />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <SearchNotFound text="Nenhum entregador encontrado com o nome informado" />
    );
  }

  return (
    <>
      <PageHeader
        title="Gerenciando entregadores"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
        inputPlaceholder="Burcar por nome"
        registerPath="/deliveries/register"
      />
      {loading ? <Spinner /> : getContent()}
    </>
  );
}
