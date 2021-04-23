export default function searchReducer(state = { searchResult: null }, action) {
  switch (action.type) {
    case 'search': {
      return {
        ...state,
        searchResult: action.payload,
      };
    }
    default:
      return state;
  }
}
