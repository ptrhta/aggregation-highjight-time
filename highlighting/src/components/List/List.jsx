import PropTypes from 'prop-types';
import Highlight from './Highlight/Highlight.jsx';
import Video from './Video/Video.jsx';
import Article from './Article/Article.jsx';

const HighlightArticle = Highlight(Article);
const HighlightVideo = Highlight(Video);

export default function List(props) {
    const list = props.list;

    return list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightVideo {...item} />
                );

            case 'article':
                return (
                    <HighlightArticle {...item} />
                );
        }
    });
};

List.propTypes = {
    list: PropTypes.array
};