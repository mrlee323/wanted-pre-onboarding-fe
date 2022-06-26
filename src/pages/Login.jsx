import React, { useRef } from 'react';
import styled from 'styled-components';
import { Navigate, useLocation } from 'react-router-dom';

const LoginBox = styled.div`
  width: 350px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 10px auto;
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
    background-color: #0095f6;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
  }
`;

const Login = ({ authenticated }) => {
  const idInput_ref = useRef();
  const pwInput_ref = useRef();

  const onSubmit = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        ID: idInput_ref.current.value,
        Password: pwInput_ref.current.value,
      })
    );
  };

  if (authenticated) return <Navigate to="/" />;

  return (
    <LoginBox>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="id"
          ref={idInput_ref}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          name="pw"
          ref={pwInput_ref}
          placeholder="비밀번호"
        />
        <button type="submit">Login</button>
      </form>
    </LoginBox>
  );
};

export default Login;
