import { combineReducers } from "redux";
import mockups from "./mockups";
import mockupTypes from "./mockupTypes";
import mockupTypeEditting from "./mockupTypeEditting";
import mockupEditting from "./mockupEditting";
const appReducers = combineReducers({
    mockups,
    mockupEditting,
    mockupTypes,
    mockupTypeEditting
});

export default appReducers;