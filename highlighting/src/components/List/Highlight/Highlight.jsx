import Popular from './Popular/Popular';
import New from './New/New';

const Highlight = (Component) => (props) => {
    if (Component) {
        if (props.views < 100) {
        return(
            <New>
            <Component {...props} />
            </New>
        );
        } else if (props.views >= 1000) {
        return(
            <Popular>
                <Component {...props} />
            </Popular>
            );
        }
    }
    return null
};

export default Highlight