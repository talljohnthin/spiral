import { GET_INCENTIVES } from "./../../actions/site/siteTypes";
import IncentivesJSON from "./../../../states.json";

export const getIncentives = () => {
  return {
    type: GET_INCENTIVES,
    payload: IncentivesJSON,
  };
};
