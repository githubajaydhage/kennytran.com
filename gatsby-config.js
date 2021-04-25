module.exports = {
    siteMetadata: {
        title: 'kennytran.com',
    },
    plugins: [
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve('./src/components/Layout/Layout.js'),
            },
        },
    ],
};
