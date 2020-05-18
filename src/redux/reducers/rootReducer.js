import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import progressReducer from "./progressReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  progress: progressReducer,
});
export default rootReducer;
