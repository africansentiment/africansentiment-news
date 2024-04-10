// articleReducer.js
const initialState = {
  articles: [],
  loading: true,
  error: null
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_ARTICLES_BEGIN':
          return {
              ...state,
              loading: true,
              error: null
          };
      case 'FETCH_ARTICLES_SUCCESS':
          return {
              ...state,
              loading: false,
              articles: action.payload.articles
          };
      case 'FETCH_ARTICLES_ERROR':
          return {
              ...state,
              loading: false,
              error: action.payload.error,
              articles: []
          };
      default:
          return state;
  }
};

export default articleReducer;
