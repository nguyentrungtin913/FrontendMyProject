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
    console.log(mockup);
    return (dispatch) => {
        return callAPI('save-mockup', 'POST', mockup).then(
            res => {
                console.log(res);
            });
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

// export const actFetchMockups = (mockups) =>{
//     return {
//         type: Types.FETCH_MOCKUPS,
//         mockups
//     }
// }
//type mockup
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
        return callAPI('mockup-type', 'GET', mockupType).then(
            res => {
                console.log(res);
                //dispatch(actAddTypeMockup(res.data));
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


