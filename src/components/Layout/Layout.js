import React from 'react';

import PropTypes from 'prop-types';

import './normalize.css';
const Layout = (props) => {
    return (
        <>
            <div className="layout">{props.children}</div>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
