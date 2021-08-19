import PropTypes from 'prop-types';

export default function Video(props) {
    const url = props.url;
    const views = props.views;

    return (
        <div className="item item-video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    )
};

Video.propTypes = {
    url: PropTypes.string,
    views: PropTypes.number
};