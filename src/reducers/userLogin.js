import * as Types from './../constants/ActionTypes';
var initialState = {};

const userLogin = (state = initialState, action)=>{
 
    switch(action.type)
    {
        case Types.AUTHENTICATE:
            return action.user;

        default: return null;
    }
}

export default userLogin;
