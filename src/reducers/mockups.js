import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
var initialState = [];

const mockups = (state = initialState, action) => {
    var index = -1;
    var { mockup } = action;
    switch (action.type) {
        case Types.FETCH_MOCKUPS:
            state = action.mockups;
            return [...state];

        case Types.DELETE_MOCKUP:
            index = _.findIndex(state, (mkp) => {
                return mockup.id === mkp.id;
            })
            state.splice(index, 1);
            return [...state];

        case Types.ADD_MOCKUP:
            state.push(mockup);
            return [...state];

        case Types.UPDATE_MOCKUP:
            index = _.findIndex(state, (mkp) => {
                return mockup.id === mkp.id;
            })
            state[index]=mockup;
            return [...state]


        default: return [...state]
    }
}

export default mockups;
