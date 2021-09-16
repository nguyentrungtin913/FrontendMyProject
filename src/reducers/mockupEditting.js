import * as Types from './../constants/ActionTypes';
var initialState = {};

const mockupEditting = (state = initialState, action)=>{
 
    switch(action.type)
    {
        case Types.EDIT_MOCKUP:
            return action.mockup;

        default: return null;
    }
}

export default mockupEditting;
