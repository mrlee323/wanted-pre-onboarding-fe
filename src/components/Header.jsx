import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GNB from './GNB';

const Nav = styled.nav`
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  height: 50px;
  width: 90vw;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) {
    height: 60px;
  }
  h1 {
    img {
      height: 40px;
    }
  }
  .input {
    width: 230px;
    height: 30px;
    border-radius: 5px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    padding-left: 10px;
    input {
      background-color: #f2f2f2;
    }
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Container>
        <h1>
          <img src="images/logo.png" alt="logo" />
        </h1>
        <div className="input">
          <SearchOutlinedIcon color="disabled" />
          <input type="text" placeholder="검색" />
        </div>
        <GNB />
      </Container>
    </Nav>
  );
};

export default Header;
