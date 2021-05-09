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
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Kenny Tran',
                background_color: '#15151B',
                display: 'minimal-ui',
                icon: './src/images/favicon.png',
                short_name: 'Kenny Tran',
                start_url: '/',
                theme_color: '#15151B',
            },
        },
        'gatsby-plugin-preload-fonts',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svgs/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: process.env.SITE_URL,
                sitemap: process.env.SITE_URL + '/sitemap/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }

                    allSitePage {
                        nodes {
                            path
                        }
                    }
                }`,
                resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map((page) => {
                        return { ...page };
                    });
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    };
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
