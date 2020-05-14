import {
  SET_ZIPCODE,
  SET_POWERBILL,
  SET_ZIPCODE_INFO,
} from "../actions/data/dataTypes";

const initialState = {
  zip_code: "",
  power_bill: 0,
  address: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZIPCODE:
      return {
        ...state,
        zip_code: action.payload,
      };
    case SET_POWERBILL:
      return {
        ...state,
        power_bill: action.payload,
      };
    case SET_ZIPCODE_INFO:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
