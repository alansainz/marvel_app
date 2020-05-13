import React from 'react';
import {
  CardContainer,
  Name,
  NameContainer,
  Container,
} from './styles';

import { getThumbNail, allUpperCase } from '../../utils/assets';

const Card = ({ name, thumbnail }) => {
  return (
    <Container>
      <CardContainer background={getThumbNail(thumbnail)}>
        <NameContainer>
          <Name>{allUpperCase(name)}</Name>
        </NameContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;
