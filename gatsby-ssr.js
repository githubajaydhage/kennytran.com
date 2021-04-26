/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
 
const React = require('react');
const Layout = require('./src/components/Layout/Layout').default;

 exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
        className: 'no-js',
    });
};

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
