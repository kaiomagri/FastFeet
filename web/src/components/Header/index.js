import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/fastfeet-logo.png';

import { Container, Content, MenuItem, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <ul>
            <MenuItem active>
              <Link to="/">ENCOMENDAS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">ENTREGADORES</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">DESTINATÁRIOS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">PROBLEMAS</Link>
            </MenuItem>
          </ul>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <Link to="/logout">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
