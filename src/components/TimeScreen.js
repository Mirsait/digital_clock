import React, { Fragment } from 'react';

import { formatTime, addZeroStr, isms } from '../datetime';

export const TimeScreen = ({ time, format, type }) => {
    const timet = formatTime(time, type);
    const ampm = timet.isAm ? 'AM' : 'PM';
    const time0 = addZeroStr(timet.time);
    const viewComma = time0.s % 2 === 0 ? ':' : null;

    return (
        <Fragment>
            <div className='grid-item hour'>{time0.h}</div>
            <div className='grid-item comma'>{viewComma}</div>
            <div className='grid-item minute'>{time0.m}</div>
            <div className='grid-item subgrid'>
                {isms(format) ? (
                    <div className='grid-item second'>{time0.s}</div>
                ) : null}
                {type ? <div className='grid-item ampm'>{ampm}</div> : ''}
            </div>
        </Fragment>
    );
};
