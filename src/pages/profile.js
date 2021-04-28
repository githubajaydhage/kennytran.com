import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Footer from '../components/Footer/Footer';
import Section from '../components/Section/Section';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import Stack from '../components/Stack/Stack';

/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';

const PageProfile = (props) => {
    const image = getImage(props.data.imageKennyTran);

    return (
        <>
            <Section>
                <Container>
                    <Grid gap={5} columns={[1, '1fr 2fr']}>
                        <Box>
                            <h1
                                sx={{
                                    display: [null, 'none'],
                                    fontSize: [7, 8, 9, 10, 11],
                                    lineHeight: 1,
                                    marginBottom: [4, 5, 6],
                                }}
                            >
                                Profile
                            </h1>
                            <div
                                className="image"
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="image__mask">
                                    <div className="image__mask-container">
                                        <GatsbyImage
                                            image={image}
                                            alt="Kenny Tran"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <h1
                                sx={{
                                    display: ['none', 'block'],
                                    fontSize: [7, 8, 9, 10, 11],
                                    lineHeight: 1,
                                    marginBottom: [4, 5, 6],
                                }}
                            >
                                Profile
                            </h1>
                            <Grid
                                columns={[1, null, 2, null, '2fr 1fr']}
                                gap={5}
                                sx={{
                                    paddingLeft: [null, 6],
                                }}
                            >
                                <Box
                                    sx={{
                                        marginRight: [null, null, null, 6, 7],
                                    }}
                                >
                                    <Stack>
                                        <p>
                                            I'm Kenny, a freelance Web Developer
                                            &amp; Consultant based in Kent, UK
                                            with over 10 years of professional
                                            experience.
                                        </p>
                                        <p>
                                            I collaborate with design agencies,
                                            independent designers and brands to
                                            develop beautiful and intuitive
                                            digital products that help solve
                                            some of the most interesting
                                            challenges for businesses of all
                                            sizes.
                                        </p>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack>
                                        <Box>
                                            <h2
                                                sx={{
                                                    fontSize: 2,
                                                }}
                                            >
                                                Email me
                                            </h2>
                                            <p>kenny@kennytran.com</p>
                                        </Box>
                                        <Box>
                                            <h2
                                                sx={{
                                                    fontSize: 2,
                                                    marginBottom: 4,
                                                }}
                                            >
                                                Get social
                                            </h2>
                                            <SocialLinks />
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default PageProfile;

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
        imageKennyTran: file(relativePath: { eq: "image-kenny-tran.jpg" }) {
            ...fluidImage
        }
    }
`;
