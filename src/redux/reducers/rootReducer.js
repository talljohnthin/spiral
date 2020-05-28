import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import progressReducer from "./progressReducer";
import siteReducer from "./siteReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  progress: progressReducer,
  site: siteReducer,
});
export default rootReducer;
