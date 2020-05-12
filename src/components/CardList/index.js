import React from 'react';
import { Container } from './styles';
import Card from '../Card';

const CardList = ({ cards }) => {
  return (
    <Container>
      {cards.length && cards.map((card) => <Card card={card} />)}
    </Container>
  );
};

export default CardList;
