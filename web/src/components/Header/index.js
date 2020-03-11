import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '~/assets/fastfeet-logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/deliveries"
          >
            ENCOMENDAS
          </NavLink>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/deliverymans"
          >
            ENTREGADORES
          </NavLink>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/recipients"
          >
            DESTINATÁRIOS
          </NavLink>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/problems"
          >
            PROBLEMAS
          </NavLink>
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
