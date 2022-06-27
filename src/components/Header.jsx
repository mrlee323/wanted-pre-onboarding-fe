import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <HeaderContiner>
      <Wrap>
        <h1>
          <Image src="images/logo.png" alt="logo" />
        </h1>
        <InputWrap>
          <SearchOutlinedIcon color="disabled" />
          <Input type="text" placeholder="검색" />
        </InputWrap>
        <Navbar />
      </Wrap>
    </HeaderContiner>
  );
};

export default Header;

const HeaderContiner = styled.header`
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Wrap = styled.div`
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
`;

const Image = styled.img`
  height: 40px;
`;

const InputWrap = styled.div`
  width: 230px;
  height: 30px;
  border-radius: 5px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  padding-left: 10px;
  @media (max-width: 650px) {
    display: none;
  }
`;

const Input = styled.input`
  background-color: #f2f2f2;
`;
