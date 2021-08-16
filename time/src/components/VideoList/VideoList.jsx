import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Video from './Video/Video.jsx';

export default function VideoList(props) {
    const list = props.list;

    return list.map(
        item => 
            <Video 
                key={uuid()}
                url={item.url} 
                date={item.date} 
            />);
}

VideoList.propTypes = {
    list: PropTypes.array.isRequired
};