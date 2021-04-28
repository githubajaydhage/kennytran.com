import React from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Global } from '@emotion/react';

import Header from '../Header/Header';

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
                    '.tl-wrapper': {
                        backgroundColor: `${theme.colors.background}`
                    },
                    '.tl-wrapper-status--entering': {
                        position: 'fixed',
                        top: '0',
                        left: '0',
                    },
                    '.tl-wrapper-status--exiting': {
                        marginLeft: '0!important',
                    },
                })}
            />
            <div className="layout">
                <Header />
                {props.children}
            </div>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
