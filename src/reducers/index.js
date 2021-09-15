import { combineReducers } from "redux";
import mockups from "./mockups";
import mockupTypes from "./mockupTypes";
import mockupTypeEditting from "./mockupTypeEditting";
const appReducers = combineReducers({
    mockups,
    mockupTypes,
    mockupTypeEditting
});

export default appReducers;