import { FETCH_MTG_LOADING, FETCH_MTG_SUCCESS, FETCH_MTG_FAILED } from "../actions";

const initialState = {
  cards: [],
  error: null,
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {

    case FETCH_MTG_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case FETCH_MTG_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_MTG_FAILED:
      return {
        ...state,
        cards: [],
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
