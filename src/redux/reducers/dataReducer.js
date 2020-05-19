import {
  SET_ZIPCODE,
  SET_POWERBILL,
  SET_ZIPCODE_INFO,
  SET_STREET_ADDRESS,
  SET_IS_HOME_OWNER,
  SET_PROVIDER,
  SET_ROOF_SHADE,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
} from "../actions/data/dataTypes";

const initialState = {
  zip_code: "",
  street_address: "",
  city: "",
  state: {},
  power_bill: 0,
  do_you_own_your_home: "",
  provider: "",
  roof_shade: "",
  name: {},
  email: "",
  phone: "",
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
        city: action.payload.city,
        state: action.payload.state,
      };
    case SET_STREET_ADDRESS:
      return {
        ...state,
        street_address: action.payload,
      };
    case SET_IS_HOME_OWNER:
      return {
        ...state,
        do_you_own_your_home: action.payload,
      };
    case SET_PROVIDER:
      return {
        ...state,
        provider: action.payload,
      };
    case SET_ROOF_SHADE:
      return {
        ...state,
        roof_shade: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
