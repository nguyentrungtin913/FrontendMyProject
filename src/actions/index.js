import callAPI from '../utils/apiCaller';
import * as Types from './../constants/ActionTypes';

//mockup
export const actFetchMockupsRequest = () => {
    return (dispatch) => {
        return callAPI('mockups', 'GET', null).then(
            res => {
                dispatch(actFetchMockups(res.data.ListAllMockup));
            });
    }
}

export const actFetchMockups = (mockups) => {
    return {
        type: Types.FETCH_MOCKUPS,
        mockups
    }
}

export const actAddMockupRequest = (mockup) => {

    return (dispatch) => {
        console.log("======");
        console.log(mockup);
        console.log("======");
        return callAPI('test-mk', 'POST', mockup).then(
            res => {
                console.log(res)
                //dispatch(actAddMockup(res.data));
            });
    }
}

export const actAddMockup = (mockup) =>{
    return {
        type: Types.ADD_MOCKUP,
        mockup
    }
}

export const actEditMockupRequest = (id) => {

    return (dispatch) => {
        return callAPI(`mockup/${id}`, 'GET', null).then(
            res => {
                dispatch(actEditMockup(res.data));
            });
    }
}

export const actEditMockup = (mockup) =>{
    return {
        type: Types.EDIT_MOCKUP,
        mockup
    }
}

export const actUploadMockupRequest = (mockup) => {

    return (dispatch) => {
        return callAPI(`mockup`, 'PUT', mockup).then(
            res => {
                dispatch(actUploadMockup(res.data));
            });
    }
}

export const actUploadMockup = (mockup) =>{
    return {
        type: Types.UPDATE_MOCKUP,
        mockup
    }
}

export const actDeleteMockupRequest = (id) => {
    return (dispatch) => {
        return callAPI(`mockup/${id}`, 'DELETE', null).then(
            res => {
                dispatch(actDeleteMockup(res.data));
            });
    }
}

export const actDeleteMockup = (mockup) => {
    return {
        type: Types.DELETE_MOCKUP,
        mockup
    }
}

export const actRenderMockupRequest = (id, image) => {
    return (dispatch) => {
        return callAPI(`render/${id}`, 'POST', image).then(
            res => {
                console.log(res)
                dispatch(actRenderMockup(res.data));
            });
    }
}

export const actRenderMockup = (path) => {
    return {
        type: Types.RENDER_MOCKUP,
        path
    }
}
///////////////////////////

export const actFetchTypesMockupRequest = () => {
    return (dispatch) => {
        return callAPI('mockup-types', 'GET', null).then(
            res => {
                dispatch(actFetchTypesMockup(res.data.ListAllTypeMockup));
            });
    }
}

export const actFetchTypesMockup = (mockupTypes) => {
    return {
        type: Types.FETCH_MOCKUPTYPES,
        mockupTypes
    }
}
export const actAddTypeMockupRequest = (mockupType) => {
    return (dispatch) => {
        return callAPI('mockup-type', 'POST', mockupType).then(
            res => {
                dispatch(actAddTypeMockup(res.data));
            });
    }
}

export const actAddTypeMockup = (mockupType) => {
    return {
        type: Types.ADD_MOCKUPTYPE,
        mockupType
    }
}

export const actDeleteTypeMockupRequest = (id) => {
    return (dispatch) => {
        return callAPI(`mockup-type/${id}`, 'DELETE', null).then(
            res => {
                dispatch(actDeleteTypeMockup(res.data));
            });
    }
}

export const actDeleteTypeMockup = (mockupType) => {
    return {
        type: Types.DELETE_MOCKUPTYPE,
        mockupType
    }
}

export const actEditTypeMockupRequest = (id) => {
    return (dispatch) => {
        return callAPI(`mockup-type/${id}`, 'GET', null).then(
            res => {
                dispatch(actEditTypeMockup(res.data));
            });
    }
}

export const actEditTypeMockup = (mockupType) => {
    return {
        type: Types.EDIT_MOCKUPTYPE,
        mockupType
    }
}

export const actUpdateTypeMockupRequest = (mockupType) => {
    return (dispatch) => {
        return callAPI(`mockup-type`, 'PUT', mockupType).then(
            res => {
                dispatch(actUpdateTypeMockup(res.data));
            });
    }
}

export const actUpdateTypeMockup = (mockupType) => {
    return {
        type: Types.UPDATE_MOCKUPTYPE,
        mockupType
    }
}

export const actAuthenticateRequest = (user) => {
    return (dispatch) => {
        return callAPI(`auth`, 'POST', user).then(
            res => {
                dispatch(actAuthenticate(res.data));
            });
    }
}

export const actAuthenticate = (user) => {
    return {
        type: Types.AUTHENTICATE,
        user
    }
}

export const actLogoutRequest = () => {
    return (dispatch) => {
        return callAPI(`logout`, 'GET', null).then(
            res => {
                //console.log(res);
                dispatch(actAuthenticate(res.data));
            });
    }
}

