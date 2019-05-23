import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getDate, isdm } from '../datetime';

export const DateScreen = ({ date, format }) => {
    const d = getDate(date);
    const isd = isdm(format);
    const dateview = viewDate(isd, d.day, d.month, d.year);
    return (
        <Fragment>
            <div className='grid-item date'>{dateview}</div>
            <div className='grid-item dayofweek'>{d.dayofweek}</div>
        </Fragment>
    );
};

DateScreen.propTypes = {
    date: PropTypes.number
};
DateScreen.defaultProps = {
    date: 0
};

const viewDate = (isd, day, month, year) => {
    if (isd) return `${day} ${month} ${year}`;
    return `${month} ${day} ${year}`;
};
