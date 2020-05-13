import axios from 'axios';
import { getRandomInt } from './functions';

const baseURL = process.env.REACT_APP_API;
const apikey = process.env.REACT_APP_API_KEY;

const apiDefaultParams = {
  apikey,
};

const api = axios.create({
  baseURL,
});

export const getRandomCharacter = () => {
  const totalCharacters = 1493;
  const characterOffset = getRandomInt(0, totalCharacters);

  return api.get(`characters?limit=1&offset=${characterOffset}`, {
    params: { ...apiDefaultParams },
  });
};

export const searchCharacters = (string) => {
  return api.get(`characters?nameStartsWith=${string}`, {
    params: { ...apiDefaultParams },
  });
};
