import { GET_INCENTIVES, OPEN_SIDEMENU } from "./../../actions/site/siteTypes";
import IncentivesJSON from "./../../../states.json";

export const getIncentives = () => {
  return {
    type: GET_INCENTIVES,
    payload: IncentivesJSON,
  };
};

export const openSideMenu = () => {
  return {
    type: OPEN_SIDEMENU,
  };
};
