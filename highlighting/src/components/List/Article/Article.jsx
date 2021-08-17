import PropTypes from 'prop-types';

export default function Article(props) {
    const title = props.title;
    const views = props.views;

    return (
        <div className="item item-article">
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    )
};

Article.propTypes = {
    title: PropTypes.string,
    views: PropTypes.number
};

