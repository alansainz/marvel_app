import React from 'react';
import { Container } from './styles';
import Card from '../Card';

const CardList = ({ cards, noResults }) => {
  if (noResults) return <div>No results, try again</div>;
  if (!cards.length) return <div>Loading...</div>;
  return (
    <Container>
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          thumbnail={card.thumbnail}
        />
      ))}
    </Container>
  );
};

export default CardList;
