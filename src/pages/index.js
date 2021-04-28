import React from 'react';
import { graphql } from 'gatsby';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import Section from '../components/Section/Section';
import TextSplit from '../components/TextSplit/TextSplit';
import Testimonials from '../components/Testimonials/Testimonials';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const PageHome = (props) => {
    const projects = [
        {
            name: 'ShopTalk London',
            image: props.data.imageShopTalkLondon,
            role: 'WordPress Development',
            url: 'https://58gin.com/',
        },
        {
            name: '58 Gin',
            image: props.data.image58Gin,
            role: 'WordPress Development',
            url: 'https://shoptalklondon.com/',
        },
        {
            name: 'Entropy',
            image: props.data.imageEntropy,
            role: 'WordPress Development',
            url: 'https://entropy.works/',
        },
    ];

    const testimonials = [
        {
            quote: `
                <p>
                    "Kenny is a pleasure to work with from beginning to end. He’s punctual, always happy to help and although our brief was somewhat obscure, he nailed it first time."
                </p>
            `,
            name: 'Mike Kramer',
            company: 'Nous House',
        },
        {
            quote: `
                <p>
                    "Kenny was knowledgeable, professional
                    and polite.
                </p>
                <p>
                    He kept us updated throughout&nbsp;the
                    process, made amendments when requested
                    and we were highly satisfied with our
                    finished website.
                </p>
                <p>
                    We would highly recommend Kenny to
                    anyone who is looking to hire a web
                    developer."
                </p>
            `,
            name: 'Claire Robinson',
            company: 'Mable Therapy',
        },
    ];

    return (
        <>
            <Section>
                <Jumbotron transitionStatus={props.transitionStatus} />
            </Section>
            <Section>
                <ProjectsList projects={projects} />
            </Section>
            <Section>
                <TextSplit />
            </Section>
            <Section>
                <Testimonials testimonials={testimonials} />
            </Section>
        </>
    );
};

export default PageHome;


export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            gatsbyImageData(
                width: 700
                breakpoints: [576, 768, 992, 1200, 1400]
                placeholder: NONE
                quality: 100
            )
        }
    }
`;

export const pageQuery = graphql`
    query {
        image58Gin: file(relativePath: { eq: "image-project-58-gin.png" }) {
            ...fluidImage
        }

        imageShopTalkLondon: file(
            relativePath: { eq: "image-project-shoptalk-london.png" }
        ) {
            ...fluidImage
        }

        imageEntropy: file(relativePath: { eq: "image-project-entropy.png" }) {
            ...fluidImage
        }
    }
`;
