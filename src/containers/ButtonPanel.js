import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setTimeType, setTimeFormat, setDateFormat } from '../actions/time';

class ButtonPanel extends React.Component {
    render() {
        const { timetype, dateformat, timeformat } = this.props;
        const { setTimeType, setDateFormat, setTimeFormat } = this.props;
        const ampm = timetype ? '12' : '24';
        return (
            <Fragment>
                <div className='grid-item timeformat'>
                    <input
                        type='checkbox'
                        id='timeformat'
                        onClick={() => setTimeFormat(timeformat)}
                    />
                    <label htmlFor='timeformat'>{timeformat}</label>
                </div>

                <div className='grid-item dayformat'>
                    <input type='checkbox' id='ampm' onClick={setTimeType} />
                    <label htmlFor='ampm'>{ampm}</label>
                </div>

                <div className='grid-item dateformat'>
                    <input
                        type='checkbox'
                        id='dateformat'
                        onClick={() => setDateFormat(dateformat)}
                    />
                    <label htmlFor='dateformat'>{dateformat}</label>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { timetype, dateformat, timeformat } = state;
    return {
        timetype,
        dateformat,
        timeformat
    };
};

export default connect(
    mapStateToProps,
    { setTimeType, setTimeFormat, setDateFormat }
)(ButtonPanel);
