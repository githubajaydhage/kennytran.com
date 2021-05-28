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
    const columnLeftRefs = useRef([]);
    const columnRightRefs = useRef([]);
    const dividerRef = useRef(null);
    const textSplitRef = useRef(null);

    const addToColumnLeftRefs = (element) => {
        if (element && !columnLeftRefs.current.includes(element)) {
            columnLeftRefs.current.push(element);
        }
    };

    const addToColumnRightRefs = (element) => {
        if (element && !columnRightRefs.current.includes(element)) {
            columnRightRefs.current.push(element);
        }
    };

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: textSplitRef.current,
                    start: 'top 75%',
                },
            });

            timeline.from(
                columnLeftRefs.current,
                {
                    duration: 2,
                    stagger: 0.1,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '20px',
                    opacity: '0',
                },
                0.25
            );

            timeline.from(
                columnRightRefs.current,
                {
                    duration: 2,
                    stagger: 0.1,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '20px',
                    opacity: '0',
                },
                0.25
            );

            timeline.from(
                dividerRef.current,
                {
                    duration: 2,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    height: '0%',
                },
                0
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
                        sx={{
                            paddingLeft: [5, null, '0', null, 7],
                            paddingRight: [5, null, '50px', null, 7],
                        }}
                    >
                        <h3 ref={addToColumnLeftRefs}>Services</h3>
                        <ul>
                            <li ref={addToColumnLeftRefs}>
                                Front-end Templates
                            </li>
                            <li ref={addToColumnLeftRefs}>JAMStack Websites</li>
                            <li ref={addToColumnLeftRefs}>
                                WordPress Websites
                            </li>
                            <li ref={addToColumnLeftRefs}>
                                WooCommerce Stores
                            </li>
                            <li ref={addToColumnLeftRefs}>Shopify Stores</li>
                        </ul>
                    </Box>
                    <Box
                        sx={{
                            paddingTop: [6, 7],
                            paddingLeft: [5, null, '50px', null, 7],
                            paddingRight: [5, null, '0', null, 7],
                        }}
                    >
                        <h3 ref={addToColumnRightRefs}>Technologies</h3>
                        <ul>
                            <li ref={addToColumnRightRefs}>HTML</li>
                            <li ref={addToColumnRightRefs}>CSS</li>
                            <li ref={addToColumnRightRefs}>Sass</li>
                            <li ref={addToColumnRightRefs}>JavaScript</li>
                            <li ref={addToColumnRightRefs}>PHP</li>
                            <li ref={addToColumnRightRefs}>WordPress</li>
                            <li ref={addToColumnRightRefs}>Gatsby</li>
                            <li ref={addToColumnRightRefs}>Eleventy</li>
                        </ul>
                    </Box>
                </Grid>
                <div ref={dividerRef} className="text-split__divider"></div>
            </Container>
        </div>
    );
};

export default TextSplit;
