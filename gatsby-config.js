const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
    path: `.env.${activeEnv}`,
});

module.exports = {
    siteMetadata: {
        author: {
            name: 'Kenny Tran',
            image: '/images/image-kenny-tran.jpg',
            url: 'https://kennytran.com',
        },
        description:
            'Freelance Web Developer based in Kent, UK. Specialising in HTML, CSS, JavaScript, React, Gatsby, WordPress, WooCommerce and Shopify Development',
        image: '/images/meta.png',
        siteUrl: process.env.SITE_URL,
        social: {
            twitter: '@kennytranco',
        },
        title: 'Kenny Tran',
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
