import React, { useState, useRef } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Badge, ActionLi, Action } from './styles';

import { useOnClickOut } from '~/components/hooks';

export default function ActionList() {
  const menuRef = useRef();

  const [visible, setVisible] = useState(false);

  useOnClickOut(menuRef, () => {
    if (visible) {
      setVisible(false);
    }
  });

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={24} />
      </Badge>
      <ActionLi ref={menuRef} visible={visible}>
        <Action>
          <MdRemoveRedEye color="#8E5BE8" size={20} />
          <span>Visualizar</span>
        </Action>
        <Action>
          <MdModeEdit color="#4D85EE" size={20} />
          <span>Editar</span>
        </Action>
        <Action>
          <MdDeleteForever color="#DE3B3B" size={20} />
          <span>Excluir</span>
        </Action>
      </ActionLi>
    </Container>
  );
}
