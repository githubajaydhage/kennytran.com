module.exports = {
    siteMetadata: {
        title: 'kennytran.com',
    },
    plugins: [
        'gatsby-plugin-gatsby-cloud',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svgs/,
                },
            },
        },
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve('./src/components/Layout/Layout.js'),
            },
        },
    ],
};
