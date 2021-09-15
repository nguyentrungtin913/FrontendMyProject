import * as Types from './../constants/ActionTypes';
var initialState = {};

const mockupTypeEditting = (state = initialState, action)=>{
 
    switch(action.type)
    {
        case Types.EDIT_MOCKUPTYPE:
            return action.mockupType;

        default: return null;
    }
}

export default mockupTypeEditting;
