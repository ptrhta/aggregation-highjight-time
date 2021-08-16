import PropTypes from 'prop-types';
import { TimePretty } from './DateTime/DateTimePretty.jsx';

export default function Video(props) {
    const url = props.url;
    const date = props.date;

    return (
        <div className="video">
            <iframe 
                src={url} 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
            >
            </iframe>
            <TimePretty date={date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string
};