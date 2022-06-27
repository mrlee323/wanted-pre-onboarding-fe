import React, { useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Navigate } from 'react-router-dom';

import MailInput from '../components/MailInput';
import PasswordInput from '../components/PasswordInput';

import useValidation from '../hooks/useValidation';

import signIn from '../utils/signIn';

const Login = () => {
  const email_ref = useRef();
  const password_ref = useRef();
  const authenticated = JSON.parse(localStorage.getItem('user'));
  const { isValidation, onChange } = useValidation(email_ref, password_ref);

  const onSubmit = useCallback((e) => {
    const email = email_ref.current;
    const password = password_ref.current;
    try {
      signIn(email, password);
      localStorage.setItem(
        'user',
        JSON.stringify({
          email: email,
          password: password,
        })
      );
    } catch (e) {
      alert('이메일 또는 비밀번호가 일치하지 않습니다');
    }
  });

  if (authenticated) return <Navigate to="/" />;

  return (
    <LogIn>
      <Image src="images/logo.png" alt="logo" />
      <form onSubmit={onSubmit}>
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
      </form>
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

const Button = styled.button`
  display: block;
  height: 30px;
  width: 270px;
  color: #fff;
  font-weight: 700;
  background-color: #b2dffc;
  border-radius: 5px;
  margin: 20px auto;
  cursor: pointer;
  ${(props) =>
    !props.disabled &&
    css`
      background-color: #0095f6;
    `}
`;
