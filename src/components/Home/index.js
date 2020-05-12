import React from 'react';
import { Container } from './styles';
import CardList from '../CardList';
import TopBar from '../TopBar';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Container>
        <CardList cards={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </Container>
    </div>
  );
};

export default Home;
