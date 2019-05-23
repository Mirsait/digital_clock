import {
    SET_TIME_TYPE,
    SET_TIME_FORMAT,
    TIME_FORMATS,
    SET_DATE_FORMAT,
    DATE_FORMATS
} from './types';

export const setTimeType = () => {
    return {
        type: SET_TIME_TYPE
    };
};

export const setTimeFormat = format => {
    let curr = parseInt(getKeyByValue(TIME_FORMATS, format));
    let len = Object.keys(TIME_FORMATS).length;
    let next = len === curr + 1 ? 0 : curr + 1;
    return {
        type: SET_TIME_FORMAT,
        payload: TIME_FORMATS[next]
    };
};

export const setDateFormat = format => {
    let curr = parseInt(getKeyByValue(DATE_FORMATS, format));
    let len = Object.keys(DATE_FORMATS).length;
    let next = len === curr + 1 ? 0 : curr + 1;
    return {
        type: SET_DATE_FORMAT,
        payload: DATE_FORMATS[next]
    };
};

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
};
