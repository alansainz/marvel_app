import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 256px;
  height: 380px;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: blue;
`;

export const Name = styled.div`
  color: white;
  font-weight: bold;
  padding-bottom: 15px;
  padding-left: 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const Container = styled.div`
  padding: 20px;
`;
