import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from './DateTime.jsx';

export const DateTimePretty = (Component) => (props) => {
    const date = props.date;

    const difference = new Date() - moment(date);
    const hour = 3600 * 1000;
    const minute = 60 * 1000;

    if (difference > (24 * hour)) {
        const residual = Math.round(difference / (24 * hour));
        return(<Component {...props} date={`${residual} дней назад`} />);
    } else if (difference >= hour) {
        const residual = Math.round(difference / hour);
        return(<Component {...props} date={`${residual} часов назад`} />);
    } else if(difference < hour) {
        const residual = Math.round(difference / minute);
        return(<Component {...props} date={`${residual} минут назад`} />);
    }
    return(<Component {...props} />);
}

export const TimePretty = DateTimePretty(DateTime);

DateTimePretty.propTypes = {
    date: PropTypes.string
};