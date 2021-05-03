import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const TextSplit = ({ mount, ...props }) => {
    const [ready, setReady] = useState(mount);
    const columnLeftRef = useRef(null);
    const columnRightRef = useRef(null);
    const dividerRef = useRef(null);
    const textSplitRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: textSplitRef.current,
                    start: 'top 75%',
                },
            });

            timeline
                .from(
                    columnLeftRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '10%',
                        opacity: '0',
                    },
                    0
                )
                .from(
                    columnRightRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '10%',
                        opacity: '0',
                    },
                    0
                )
                .from(
                    dividerRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        height: '0%',
                    },
                    0.25
                );
        }
    }, [mount]);

    return (
        <div
            ref={textSplitRef}
            className="text-split"
            sx={{
                paddingTop: [6, 7],
                position: 'relative',
                backgroundColor: 'background',

                h3: {
                    fontSize: 1,
                    marginBottom: 3,
                },

                ul: {
                    padding: '0',
                    margin: '0',
                    listStyle: 'none',

                    li: {
                        fontSize: [5, 6],
                    },
                },

                '.text-split__divider': {
                    width: '1px',
                    height: ['calc(100% + 20px)', 'calc(100% + 80px)'],
                    position: 'absolute',
                    top: '0',
                    left: ['25px', '50px', '50%'],
                    backgroundColor: 'border',
                },
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    paddingBottom: [7],
                }}
            >
                <Grid columns={[1, null, 2]}>
                    <Box
                        ref={columnLeftRef}
                        sx={{
                            paddingLeft: [5, null, '0', null, 7],
                            paddingRight: [5, null, '50px', null, 7],
                        }}
                    >
                        <h3>Services</h3>
                        <ul>
                            <li>Front-end Templates</li>
                            <li>JAMStack Websites</li>
                            <li>WordPress Websites</li>
                            <li>WooCommerce Stores</li>
                            <li>Shopify Stores</li>
                        </ul>
                    </Box>
                    <Box
                        ref={columnRightRef}
                        sx={{
                            paddingTop: [6, 7],
                            paddingLeft: [5, null, '50px', null, 7],
                            paddingRight: [5, null, '0', null, 7],
                        }}
                    >
                        <h3>Technologies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>WordPress</li>
                            <li>Gatsby</li>
                            <li>Eleventy</li>
                        </ul>
                    </Box>
                </Grid>
                <div ref={dividerRef} className="text-split__divider"></div>
            </Container>
        </div>
    );
};

export default TextSplit;
