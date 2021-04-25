import React from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Global } from '@emotion/react';

import './normalize.css';
import './fonts.css';

const Layout = (props) => {
    return (
        <>
            <Global
                styles={(theme) => ({
                    'blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, p, ul, ol': {
                        marginTop: 0,
                        marginBottom: 0,
                    },
                    'h1, h2, h3, h4, h5, h6': {
                        fontWeight: `${theme.fontWeights.heading}`,
                    },
                    a: {
                        color: theme.colors.primary,
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    },
                })}
            />
            <div className="layout">{props.children}</div>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
