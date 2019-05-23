import React from 'react';
import Header from './Header';
import DateScreen from './DateScreen';
import TimeScreen from './TimeScreen';
import ButtonPanel from './ButtonPanel';
import { getTime } from '../datetime';

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 0,
            time: { h: 0, m: 0, s: 0 },
            timeformat: "hh:mm:ss", // "hh", "hh:mm", "hh:mm:ss"
            dateformat: "dd mm yyyy", // "dd mm yyyy", "dd/mm/yyyy", "mm/dd/yyyy", "dd MM yyyy"
            type: 'T24', // T12 (AM/PM) / T24
            on: false
        }
    }

    componentWillMount = () => {
        this.start();
    }

    start = () => {
        this.timer = setInterval(() => {
            const now = Date.now();
            this.setState({
                date: now,
                time: getTime(now)
            });
        }, 1000);
    }

    render() {
        const {time, date} = this.state;
        return (
            <div className="digitalclock">
                <Header />
                <TimeScreen time={time} />
                <DateScreen date={date} />
                <ButtonPanel />
            </div>
        );
    }
}

export default DigitalClock;