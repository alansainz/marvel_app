export const getThumbNail = (thumbnail) => {
  if (thumbnail && thumbnail.path && thumbnail.extension) {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
  return '';
};

export const allUpperCase = (string) => {
  if (string) return string.toUpperCase();
  return '';
};

export const getCharactersData = (result) =>
  result && result.data && result.data.results;
