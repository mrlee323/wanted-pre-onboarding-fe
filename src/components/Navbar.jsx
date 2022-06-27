import React, { useCallback } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const NavBar = () => {
  const logout = useCallback(() => {
    localStorage.removeItem('user');
    alert('로그아웃되었습니다');
  }, []);

  return (
    <Nav>
      <NavLink to="/" className="link home">
        <HomeIcon />
      </NavLink>
      <NavLink to="message" className="link message">
        <SendRoundedIcon />
      </NavLink>
      <NavLink to="posting" className="link posting">
        <AddBoxOutlinedIcon />
      </NavLink>
      <NavLink to="post" className="link post">
        <ExploreOutlinedIcon />
      </NavLink>
      <NavLink to="activity" className="link heart">
        <FavoriteBorderOutlinedIcon />
      </NavLink>
      <NavLink to="/login" onClick={logout} className="link logout">
        <ExitToAppOutlinedIcon />
      </NavLink>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  width: 200px;
  justify-content: space-between;
  .link {
    color: #262626;
  }
  @media (max-width: 650px) {
    width: 100px;
    .home {
      display: none;
    }
    .message {
      display: none;
    }
    .post {
      display: none;
    }
  }
`;
