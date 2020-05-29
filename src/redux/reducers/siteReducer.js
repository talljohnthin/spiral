import { GET_INCENTIVES, OPEN_SIDEMENU } from "../actions/site/siteTypes";

const initialState = {
  incentives: [],
  openMobileMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCENTIVES:
      return {
        ...state,
        incentives: action.payload,
      };
    case OPEN_SIDEMENU:
      return {
        ...state,
        openMobileMenu: !state.openMobileMenu,
      };
    default:
      return state;
  }
};

export default reducer;
