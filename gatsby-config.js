module.exports = {
    siteMetadata: {
        title: 'kennytran.com',
    },
    plugins: [
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svgs/,
                },
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve('./src/components/Layout/Layout.js'),
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
    ],
};
