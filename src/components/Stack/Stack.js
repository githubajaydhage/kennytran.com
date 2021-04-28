import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const Stack = (props) => {
    return (
        <div
            className="stack"
            sx={{
                display: 'grid',
                gridGap: 4,
            }}
        >
            {props.children}
        </div>
    );
};

export default Stack;

Stack.propTypes = {
    children: PropTypes.node.isRequired,
};
