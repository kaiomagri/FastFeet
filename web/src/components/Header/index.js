import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '~/assets/fastfeet-logo.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
          <NavLink
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
              <strong>{name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
