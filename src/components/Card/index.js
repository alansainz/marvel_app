import React from 'react';
import {
  CardContainer,
  Name,
  NameContainer,
  Container,
} from './styles';

const card = {
  id: 1011334,
  name: '3-D Man',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg',
  },
};

const getThumbNail = (thumbnail) => {
  if (thumbnail.path && thumbnail.extension) {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
  return '';
};

const allUpperCase = (string) => (string ? string.toUpperCase() : '');

const Card = () => {
  return (
    <Container>
      <CardContainer background={getThumbNail(card.thumbnail)}>
        <NameContainer>
          <Name>{allUpperCase(card.name)}</Name>
        </NameContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;
