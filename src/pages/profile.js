import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Footer from '../components/Footer/Footer';
import TransitionFadeUp from '../components/TransitionFadeUp/TransitionFadeUp';
import TransitionImage from '../components/TransitionImage/TransitionImage';
import TransitionLetters from '../components/TransitionLetters/TransitionLetters';
import Section from '../components/Section/Section';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import Stack from '../components/Stack/Stack';

/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';

const PageProfile = ({ data, mount }) => {
    const image = getImage(data.imageKennyTran);

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
                                        <TransitionImage
                                            mount={mount}
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
                                <TransitionLetters mount={mount}>
                                    Profile
                                </TransitionLetters>
                            </h1>
                            <TransitionFadeUp mount={mount}>
                                <Grid
                                    columns={[1, null, 2, null, '2fr 1fr']}
                                    gap={5}
                                    sx={{
                                        paddingLeft: [null, 6],
                                    }}
                                >
                                    <Box
                                        sx={{
                                            marginRight: [
                                                null,
                                                null,
                                                null,
                                                6,
                                                7,
                                            ],
                                        }}
                                    >
                                        <Stack>
                                            <p>
                                                I'm Kenny, a freelance Web
                                                Developer &amp; Consultant based
                                                in Kent, UK with over 10 years
                                                of professional experience.
                                            </p>
                                            <p>
                                                I collaborate with design
                                                agencies, independent designers
                                                and brands to develop beautiful
                                                and intuitive digital products
                                                that help solve some of the most
                                                interesting challenges for
                                                businesses of all sizes.
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
                            </TransitionFadeUp>
                        </Box>
                    </Grid>
                </Container>
            </Section>
            <Footer mount={mount} />
        </>
    );
};

export default PageProfile;

export const pageQuery = graphql`
    query {
        imageKennyTran: file(relativePath: { eq: "image-kenny-tran.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    breakpoints: [576, 768, 992, 1200, 1400]
                    placeholder: NONE
                    quality: 100
                )
            }
        }
    }
`;
