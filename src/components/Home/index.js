import React, { useState, useCallback } from 'react';
import { useAsync } from 'react-async-hook';
import { Container, HomeContainer } from './styles';
import CardList from '../CardList';
import TopBar from '../TopBar';
import { getRandomCharacter } from '../../utils/api';

const getCharacterData = (result) =>
  result && result.data && result.data.results;

const Home = () => {
  const { result, error, loading } = useAsync(getRandomCharacter, []);
  const randomCharacter = useCallback(getCharacterData(result), [
    result,
  ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <HomeContainer>
      <TopBar />
      <Container>
        <CardList cards={randomCharacter} />
      </Container>
    </HomeContainer>
  );
};

export default Home;
