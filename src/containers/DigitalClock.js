import React from 'react';
import { Header } from '../components/Header';
import { DateScreen } from '../components/DateScreen';
import { TimeScreen } from '../components/TimeScreen';
import ButtonPanel from './ButtonPanel';
import { connect } from 'react-redux';

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 0,
            time: { h: 0, m: 0, s: 0 }
        };
    }

    componentWillMount = () => {
        this.start();
    };

    start = () => {
        this.timer = setInterval(() => {
            const now = Date.now();
            this.setState({ date: now, time: now });
        }, 1000);
    };

    render() {
        const { time, date } = this.state;
        const { timeformat, timetype, dateformat } = this.props;
        return (
            <div className='grid clock'>
                <Header title='Digital Clock' />
                <TimeScreen time={time} format={timeformat} type={timetype} />
                <DateScreen date={date} format={dateformat} />
                <ButtonPanel />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { timeformat, timetype, dateformat } = state;
    return {
        timeformat,
        timetype,
        dateformat
    };
};

export default connect(
    mapStateToProps,
    null
)(DigitalClock);
