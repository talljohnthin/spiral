import { SET_PROGRESS } from "../actions/progress/progressTypes";

const initialState = {
  progressPercent: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progressPercent: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
