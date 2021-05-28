import { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { useForm, ValidationError } from '@formspree/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import TransitionLinkFadeUp from '../TransitionLinkFadeUp/TransitionLinkFadeUp';

/** @jsx jsx */
import {
    jsx,
    Divider,
    Box,
    Container,
    Grid,
    Input,
    Textarea,
    Themed,
} from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const Footer = ({ mount }) => {
    const [ready, setReady] = useState(mount);
    const [state, handleSubmit] = useForm('xpzkwpwk', true);
    const backgroundRef = useRef(null);
    const formRef = useRef(null);
    const footerRef = useRef(null);
    const headingRef = useRef(null);
    const navRef = useRef(null);
    const socialRef = useRef(null);
    let formHeading = '';

    useEffect(() => {
        setReady(mount);
        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 75%',
                },
            });

            const headingSplit = new SplitText(headingRef.current, {
                type: 'lines, words',
                linesClass: 'line',
            });
            const headingWords = headingSplit.words;

            timeline
                .from(
                    backgroundRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scaleY: '0',
                        transformOrigin: 'top',
                    },
                    0
                )
                .from(
                    headingWords,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '100%',
                        opacity: '0',
                    },
                    0.5
                )
                .from(
                    formRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '10%',
                        opacity: '0',
                    },
                    0.7
                )
                .from(
                    navRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '10%',
                        opacity: '0',
                    },
                    0.9
                )
                .from(
                    socialRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '10%',
                        opacity: '0',
                    },
                    1.1
                );
        }
    }, [mount]);

    if (state.submitting) {
        formHeading = 'Sending...';
    } else {
        if (state.succeeded) {
            formHeading = 'Thank you for your message';
            formRef.current.reset();
        } else {
            formHeading = 'Get in touch';
        }
    }

    return (
        <footer
            ref={footerRef}
            className="footer"
            sx={{
                marginTop: [7],
                marginBottom: [null, 6],
                position: 'relative',
                overflow: 'hidden',

                h1: {
                    fontSize: [7, null, null, 8],
                    marginBottom: [5, 6],

                    '.line': {
                        overflow: 'hidden',
                    },
                },

                form: {
                    marginBottom: 6,

                    button: {
                        marginTop: ['-25px', null, null, 0],
                        position: [null, null, null, 'absolute'],
                        bottom: [null, null, null, '-10%'],
                        right: [null, null, null, '0'],
                        transform: [null, null, null, 'translate(80%, 0)'],
                        cursor: 'pointer',
                    },
                },

                '.footer__box': {
                    py: [5, null, 6],
                    paddingLeft: [null, 6, null, null, '200px'],
                    position: 'relative',
                },

                '.footer__background': {
                    width: '200%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: ['-25px', 0],
                    zIndex: '-1',
                    transform: [null, null, null, null, 'translate(100px, 0)'],
                    backgroundColor: 'muted',
                },
            }}
        >
            <Container>
                <div className="footer__box">
                    <Themed.h1 ref={headingRef}>{formHeading}</Themed.h1>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <Grid
                            columns={[1, null, '1fr 1.6fr']}
                            gap={[5, null]}
                            sx={{
                                paddingRight: [null, null, null, 7, null, 8],
                            }}
                        >
                            <Box>
                                <Input
                                    id="name"
                                    type="name"
                                    name="name"
                                    required
                                    placeholder="Name"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridGap: 5,
                                }}
                            >
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    sx={{
                                        width: [null, null, null, null, '60%'],
                                    }}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <Box
                                    sx={{
                                        position: [
                                            null,
                                            null,
                                            null,
                                            'relative',
                                        ],
                                    }}
                                >
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder="Message"
                                        rows={10}
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <Button
                                        type="submit"
                                        disabled={state.submitting}
                                    >
                                        {state.submitting
                                            ? 'sending'
                                            : 'submit'}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </form>
                    <div ref={navRef}>
                        <Divider
                            sx={{
                                marginBottom: [2, 4],
                            }}
                        />
                        <Grid
                            columns={[1, null, 2]}
                            sx={{
                                marginBottom: 6,
                            }}
                        >
                            <Box>
                                <ul
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: 0,
                                        margin: 0,
                                        listStyle: 'none',

                                        '& > li': {
                                            '&:not(:last-child)': {
                                                marginRight: 5,
                                            },
                                        },
                                    }}
                                >
                                    <li>
                                        <TransitionLinkFadeUp
                                            activeClassName="is-active"
                                            to="/"
                                            sx={{
                                                variant: 'text.nav',
                                            }}
                                        >
                                            Home
                                        </TransitionLinkFadeUp>
                                    </li>
                                    <li>
                                        <TransitionLinkFadeUp
                                            activeClassName="is-active"
                                            to="/profile"
                                            sx={{
                                                variant: 'text.nav',
                                            }}
                                        >
                                            Profile
                                        </TransitionLinkFadeUp>
                                    </li>
                                </ul>
                            </Box>
                            <Box
                                sx={{
                                    paddingRight: [null, null, null, null, 7],
                                }}
                            >
                                <p
                                    sx={{
                                        fontSize: [0, 1],
                                    }}
                                >
                                    Copyright &copy; 2021 Kenny Tran Co Ltd.
                                    Registered in England and Wales. Company
                                    number 12716945.
                                </p>
                            </Box>
                        </Grid>
                    </div>
                    <Box ref={socialRef}>
                        <SocialLinks />
                    </Box>
                    <div
                        ref={backgroundRef}
                        className="footer__background"
                    ></div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
