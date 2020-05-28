import { GET_INCENTIVES } from "../actions/site/siteTypes";

const initialState = {
  incentives: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCENTIVES:
      return {
        ...state,
        incentives: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
