import { combineReducers } from "redux";
import mockups from "./mockups";
import mockupTypes from "./mockupTypes";
import mockupTypeEditting from "./mockupTypeEditting";
import mockupEditting from "./mockupEditting";
import mockupRender from "./mockupRender";
import userLogin from "./userLogin";
const appReducers = combineReducers({
    mockups,
    mockupEditting,
    mockupTypes,
    mockupTypeEditting,
    mockupRender,
    userLogin
});


export default appReducers;