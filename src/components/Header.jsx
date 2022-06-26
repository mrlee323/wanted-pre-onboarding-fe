import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GNB from './GNB';

const Nav = styled.nav`
  border-bottom: 1px solid #ccc;
`;

const Container = styled.div`
  height: 50px;
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
    font-size: 30px;
    font-weight: 700;
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
        <h1>Instagram</h1>
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
