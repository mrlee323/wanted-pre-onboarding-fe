import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <HeaderContiner>
      <Wrap>
        <Image src="images/logo.png" alt="logo" />
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
  border-bottom: ${({ theme }) => theme.border.main};
  background-color: #fff;
  position: sticky;
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
  @media ${({ theme }) => theme.media.max} {
    height: 60px;
    padding: 0;
  }
`;

const Image = styled.img`
  height: 45px;
`;

const InputWrap = styled.div`
  width: 230px;
  height: 30px;
  border-radius: 5px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  padding-left: 10px;
  @media ${({ theme }) => theme.media.max} {
    display: none;
  }
`;

const Input = styled.input`
  background-color: #f2f2f2;
`;
