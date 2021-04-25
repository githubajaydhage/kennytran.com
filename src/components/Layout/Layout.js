import React from 'react';

import PropTypes from 'prop-types';

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                {props.children}
            </div>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
