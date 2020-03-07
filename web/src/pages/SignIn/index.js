import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  return (
    <div>
      <img src={Logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={() => {}}>
        <Input
          name="email"
          type="email"
          placeholder="Seu email"
          label="SEU E-MAIL"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha"
          label="SUA SENHA"
        />

        <button type="submit">Entrar no sistema</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </div>
  );
}
