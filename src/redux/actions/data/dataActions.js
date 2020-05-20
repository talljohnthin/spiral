import { PROVIDERS_API } from "./../../../config/keys";
import {
  SET_LIST_OF_PROVIDERS,
  SET_LIST_OF_PROVIDERS_WITH_RADIUS,
} from "./../../actions/data/dataTypes";

export const handleGetProviders = (zipcode) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://developer.nrel.gov/api/utility_rates/v3.json?api_key=${PROVIDERS_API}&format=JSON&address=${zipcode}`
      );
      const result = await response.json();
      const data = result.outputs?.utility_name?.split("|");
      dispatch({
        type: SET_LIST_OF_PROVIDERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleGetProvidersWithRadius = (zipcode, radius) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://developer.nrel.gov/api/utility_rates/v3.json?api_key=${PROVIDERS_API}&format=JSON&address=${zipcode}&radius=${radius}`
      );
      const result = await response.json();
      const data = result.outputs?.utility_name?.split("|");
      dispatch({
        type: SET_LIST_OF_PROVIDERS_WITH_RADIUS,
        payload: Array.from(new Set(data)),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
