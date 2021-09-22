import * as Types from './../constants/ActionTypes';
var initialState = {};

const mockupRender = (state = initialState, action)=>{
 
    switch(action.type)
    {
        case Types.RENDER_MOCKUP:
            return action.path;

        default: return null;
    }
}

export default mockupRender;
