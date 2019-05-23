const months = {
    0: 'january',
    1: 'february',
    2: 'march',
    3: 'april',
    4: 'may',
    5: 'juny',
    6: 'july',
    7: 'august',
    8: 'september',
    9: 'october',
    10: 'november',
    11: 'december'
};

const days = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    0: 'sunday'
};

export const getMonthName = number => months[number];

export const getDayName = number => days[number];

export const getTime = date => {
    const now = new Date(date);

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    return { h, m, s };
};

export const formatTime = (time, type1224) => {
    let isAm = false;
    let now = getTime(time);
    if (type1224) {
        if (now.h > 12) {
            now.h -= 12;
        } else {
            isAm = true;
        }
    }

    return { time: now, isAm: isAm };
};

const addZero = number => {
    return number < 10 ? `0${number}` : `${number}`;
};

export const ismm = format => {
    let res = format.match(/:mm/);
    return res != null && res.length > 0;
};

export const isms = format => {
    let res = format.match(/:ss/);
    return res != null && res.length > 0;
};

export const addZeroStr = time => {
    const h = addZero(time.h);
    const m = addZero(time.m);
    const s = addZero(time.s);
    return { h, m, s };
};

export const getDate = date => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = getMonthName(d.getMonth());
    let day = d.getDate();
    let dayofweek = getDayName(d.getDay());
    return { year, month, day, dayofweek };
};

export const isdm = format => {
    let res = format.match(/dd mm/);
    return res != null && res.length > 0;
};
