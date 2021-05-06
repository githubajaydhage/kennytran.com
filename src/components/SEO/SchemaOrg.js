import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrg = ({
    author,
    article,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    title,
    url,
}) => {
    const baseSchema = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url,
            name: title,
            alternateName: defaultTitle,
        },
        {
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: author.name,
            image: `${canonicalUrl}${author.image}`,
            url: author.url,
            sameAs: [
                'https://github.com/kennytranco',
                'https://www.linkedin.com/in/kennytranco',
                'https://twitter.com/kennytranco',
            ],
        },
    ];

    const schema = article
        ? [
              ...baseSchema,
              {
                  '@context': 'http://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                      {
                          '@type': 'ListItem',
                          position: 1,
                          item: {
                              '@id': url,
                              name: title,
                              image,
                          },
                      },
                  ],
              },
              {
                  '@context': 'http://schema.org',
                  '@type': 'BlogPosting',
                  url,
                  name: title,
                  alternateName: defaultTitle,
                  headline: title,
                  image: {
                      '@type': 'ImageObject',
                      url: image,
                  },
                  description,
                  author: {
                      '@type': 'Person',
                      name: author.name,
                  },
                  mainEntityOfPage: {
                      '@type': 'WebSite',
                      '@id': canonicalUrl,
                  },
                  datePublished,
              },
          ]
        : baseSchema;

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};

export default SchemaOrg;
