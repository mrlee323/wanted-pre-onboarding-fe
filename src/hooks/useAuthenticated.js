import React, { useCallback, useMemo } from 'react';
import signIn from '../utils/signIn';

const useAuthenticated = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem('user'));

  const login = (email, password) => {
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
  };

  const logout = () => {
    localStorage.removeItem('user');
    alert('로그아웃되었습니다');
  };

  return { isAuthenticated, login, logout };
};

export default useAuthenticated;
