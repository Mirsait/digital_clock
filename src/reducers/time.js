import {
    SET_TIME_TYPE,
    SET_TIME_FORMAT,
    SET_DATE_FORMAT
} from '../actions/types';

const initialState = {
    timetype: true, // 12 true (am/pm) / 24 false
    timeformat: 'hh:mm:ss', // "hh:mm", "hh:mm:ss"
    dateformat: 'mm dd yyyy' // "dd mm yyyy", "mm dd yyyy"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME_TYPE:
            return { ...state, timetype: !state.timetype };
        case SET_TIME_FORMAT:
            return { ...state, timeformat: action.payload };
        case SET_DATE_FORMAT:
            return { ...state, dateformat: action.payload };
        default:
            return state;
    }
};
