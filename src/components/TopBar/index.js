import React, { useReducer } from 'react';
import debounce from 'lodash/debounce';
import { Container } from './styles';
import { Store } from '../../Store';
import { searchCharactersRequest } from '../Home/actions';

const initialState = {
  query: '',
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const debouncedSearch = debounce(searchCharactersRequest, 500, {
  trailing: true,
});

const SearchBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { dispatch: storeDispatch } = React.useContext(Store);

  const onChange = (e) => {
    const {
      target: { value, name: field },
    } = e;
    const isQueryLongEnough = value.length >= 3;

    dispatch({ field, value });

    if (isQueryLongEnough) {
      debouncedSearch(storeDispatch, value);
    }
  };

  const { query } = state;

  return (
    <div>
      <input name="query" value={query} onChange={onChange} />
    </div>
  );
};

const TopBar = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default TopBar;
