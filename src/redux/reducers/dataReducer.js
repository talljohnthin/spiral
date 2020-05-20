import {
  SET_ZIPCODE,
  SET_POWERBILL,
  SET_ZIPCODE_INFO,
  SET_CITY,
  SET_STREET_ADDRESS,
  SET_IS_HOME_OWNER,
  SET_PROVIDER,
  SET_ROOF_SHADE,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
  SET_LIST_OF_PROVIDERS,
  SET_LIST_OF_PROVIDERS_WITH_RADIUS,
} from "../actions/data/dataTypes";

const initialState = {
  zip_code: "",
  street_address: "",
  city: "",
  state: {},
  name: {},
  email: "",
  phone: "",
  power_bill: {
    value: 300,
    text_value: "$301 - $400",
  },
  do_you_own_your_home: "",
  roof_shade: "",
  providers: {
    provider: "",
    is_dropdown: false,
    list_of_providers: [],
    list_of_providers_with_radius: [],
  },
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
    case SET_CITY:
      return {
        ...state,
        city: action.payload.city,
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
        providers: {
          ...state.providers,
          provider: action.payload.provider,
          is_dropdown: action.payload.isDropdown,
        },
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
    case SET_LIST_OF_PROVIDERS:
      return {
        ...state,
        providers: {
          ...state.providers,
          list_of_providers: action.payload,
        },
      };
    case SET_LIST_OF_PROVIDERS_WITH_RADIUS:
      return {
        ...state,
        providers: {
          ...state.providers,
          list_of_providers_with_radius: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
