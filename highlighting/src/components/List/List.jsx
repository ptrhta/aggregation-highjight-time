import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import withHighlight from './withHighlight/withHighlight.jsx';
import Video from './Video/Video.jsx';
import Article from './Article/Article.jsx';

const HighlightArticle = withHighlight(Article);
const HighlightVideo = withHighlight(Video);

export default function List(props) {
    const list = props.list;

    return list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightVideo key={uuid()} {...item} />
                );

            case 'article':
                return (
                    <HighlightArticle key={uuid()} {...item} />
                );
        }
    });
};

List.propTypes = {
    list: PropTypes.array
};