export const searchProduct = (searchResult) => {
  return {
    type: 'search',
    payload: searchResult,
  };
};
