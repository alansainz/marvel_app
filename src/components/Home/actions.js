import {
  getRandomCharacter,
  searchCharacters,
} from '../../utils/api';

export const getRandomCharacterRequest = (dispatch) => {
  getRandomCharacter()
    .then((response) => {
      return dispatch({
        type: 'GET_RANDOM_CHARACTER',
        payload: response.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: 'GET_RANDOM_CHARACTER_FAIL',
        payload: error,
      });
    });
};

export const searchCharactersRequest = (dispatch, string) => {
  searchCharacters(string)
    .then((response) => {
      return dispatch({
        type: 'GET_CHARACTERS',
        payload: response.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: 'GET_CHARACTERS_FAIL',
        payload: error,
      });
    });
};
