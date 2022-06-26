import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const GNBContiainer = styled.div`
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

const GNB = () => {
  return (
    <GNBContiainer>
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
      <NavLink to="/login" className="link logout">
        <ExitToAppOutlinedIcon />
      </NavLink>
    </GNBContiainer>
  );
};

export default GNB;
