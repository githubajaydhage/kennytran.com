/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react');
const Layout = require('./src/components/Layout/Layout').default;

exports.onClientEntry = () => {
    document.body.className = document.body.className.replace(
        /\bno-js\b/,
        'js'
    );
};

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
