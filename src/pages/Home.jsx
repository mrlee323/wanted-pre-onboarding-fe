import React from 'react';
import styled from 'styled-components';
import Feeds from '../components/Feeds';
import Header from '../components/Header';

const HomeContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Feeds />
    </HomeContainer>
  );
};

export default Home;
