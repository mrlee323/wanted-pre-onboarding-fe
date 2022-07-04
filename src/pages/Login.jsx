import React, { useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Navigate } from 'react-router-dom';

import useValidation from '../hooks/useValidation';
import useAuthenticated from '../hooks/useAuthenticated';

import MailInput from '../components/MailInput';
import PasswordInput from '../components/PasswordInput';

const Login = () => {
  const email_ref = useRef();
  const password_ref = useRef();
  const { isValidation, onChange } = useValidation(email_ref, password_ref);
  const { isAuthenticated, login } = useAuthenticated();

  const onSubmit = useCallback((e) => {
    login(email_ref.current, password_ref.current);
  });

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <LogIn>
      <Image src="images/logo.png" alt="logo" />
      <Form onSubmit={onSubmit}>
        <MailInput onChange={onChange} isValidation={isValidation.email} />
        <PasswordInput
          onChange={onChange}
          isValidation={isValidation.password}
        />
        <Button
          type="submit"
          disabled={!isValidation.email || !isValidation.password}
        >
          Login
        </Button>
      </Form>
    </LogIn>
  );
};

export default Login;

const LogIn = styled.div`
  width: 350px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 50px auto;
  line-height: 2;
`;

const Image = styled.img`
  margin: 40px 55px 30px;
  height: 80px;
`;

const Form = styled.form``;

const Button = styled.button`
  display: block;
  height: 30px;
  width: 270px;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
  margin: 20px auto;
  cursor: pointer;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.disabled : theme.color.active};
`;
