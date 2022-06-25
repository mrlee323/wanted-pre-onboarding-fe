import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LoginBox = styled.div`
  width: 300px;
  height: 330px;
  border: 1px solid #ccc;
  margin: 10px auto;
  line-height: 2;
  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    margin: 30px 0;
  }
  input {
    display: block;
    height: 40px;
    width: 250px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fafafa;
    margin: 10px auto;
    padding-left: 5px;
  }
  button {
    display: block;
    height: 35px;
    width: 250px;
    color: #fff;
    font-weight: 700;
    background-color: #0095f6;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
  }
`;

const Login = () => {
  const idInput_ref = useRef();
  const pwInput_ref = useRef();

  useEffect(() => {
    const LoginInfo = JSON.parse(localStorage.getItem('LoginInfo'));

    if (!LoginInfo) return;
    console.log(LoginInfo);
    idInput_ref.current.value = LoginInfo.ID;
    pwInput_ref.current.value = LoginInfo.Password;
  });

  const onSubmit = () => {
    localStorage.setItem(
      'LoginInfo',
      JSON.stringify({
        ID: idInput_ref.current.value,
        Password: pwInput_ref.current.value,
      })
    );
  };

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
        <NavLink to="/main" style={{ textDecoration: 'none' }}>
          <button type="submit">Login</button>
        </NavLink>
      </form>
    </LoginBox>
  );
};

export default Login;
