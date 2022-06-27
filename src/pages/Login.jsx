import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import MailInput from '../components/MailInput';
import PasswordInput from '../components/PasswordInput';
import useValidation from '../hooks/useValidation';
import signIn from '../utils/signIn';

const LoginBox = styled.div`
  width: 350px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 50px auto;
  line-height: 2;
  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 40px;
    margin: 30px 0;
  }
  input {
    display: block;
    height: 40px;
    width: 270px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fafafa;
    margin: 10px auto;
    padding-left: 5px;
  }
  button {
    display: block;
    height: 30px;
    width: 270px;
    color: #fff;
    font-weight: 700;
    background-color: #b2dffc;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
  }
`;

const Login = () => {
  const authenticated = JSON.parse(localStorage.getItem('user'));
  const email_ref = useRef();
  const password_ref = useRef();
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
    <LoginBox>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <MailInput onChange={onChange} isValidation={isValidation.email} />
        <PasswordInput
          onChange={onChange}
          isValidation={isValidation.password}
        />
        <button
          type="submit"
          disabled={!isValidation.email && !isValidation.password}
          style={{
            backgroundColor:
              isValidation.email && isValidation.password && '#0095f6',
          }}
        >
          Login
        </button>
      </form>
    </LoginBox>
  );
};

export default Login;
