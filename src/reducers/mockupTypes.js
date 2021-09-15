import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
var initialState = [];

const mockupTypes = (state = initialState, action) => {
    var { mockupType } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_MOCKUPTYPES:
            state = action.mockupTypes;
            return [...state];

        case Types.ADD_MOCKUPTYPE:
            state.push(mockupType);
            return [...state];

        case Types.DELETE_MOCKUPTYPE:
            index = _.findIndex(state, (mkpType) => {
                return mkpType.id === mockupType.id;
            });
            state.splice(index, 1);
            return [...state];

        case Types.UPDATE_MOCKUPTYPE:
            index = _.findIndex(state, (mkpType) => {
                return mkpType.id === mockupType.id;
            });
            state[index]= mockupType;
            return [...state];

        default: return [...state]
    }
}

export default mockupTypes;
