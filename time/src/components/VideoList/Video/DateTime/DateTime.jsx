import PropTypes from 'prop-types';

export default function DateTime(props) {
    const date = props.date;

    return (
        <p className="date">{date}</p>
    )
}


DateTime.propTypes = {
    date:PropTypes.string.isRequired
};