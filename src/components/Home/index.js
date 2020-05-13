import React, { useEffect } from 'react';
import { Container, HomeContainer } from './styles';
import { getRandomCharacterRequest } from './actions';
import { Store } from '../../Store';
import TopBar from '../TopBar';
import CardList from '../CardList';

const Home = () => {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    // todo: handle fetching and error, useffect deps
    getRandomCharacterRequest(dispatch);
  }, []);

  const { characters, noResults } = state;
  console.log('hello characters', state.noResults);
  return (
    <HomeContainer>
      <TopBar />
      <Container>
        <CardList cards={characters} noResults={noResults} />
      </Container>
    </HomeContainer>
  );
};

export default Home;
