import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TransitionLinkFadeUp from '../TransitionLinkFadeUp/TransitionLinkFadeUp';

/** @jsx jsx */
import { jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

const Nav = ({ navVisible, toggleNavVisible, ...props }) => {
    const navItems = [
        {
            name: 'Profile',
            url: '/profile',
        },
    ];

    let navList = useRef([]);

    useEffect(() => {
        ScrollTrigger.matchMedia({
            '(min-width: 768px)': function () {
                gsap.fromTo(
                    navList.current,
                    {
                        opacity: '0',
                        y: '20px',
                    },
                    {
                        delay: 0.5,
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        stagger: 0.25,
                        opacity: '1',
                        y: '0',
                    }
                );
            },
        });
    }, []);

    return (
        <>
            <nav
                className="nav"
                sx={{
                    'body.js &': {
                        display: ['none', null, 'block'],
                        marginLeft: 'auto',

                        ul: {
                            display: 'flex',
                            alignItems: 'center',
                            padding: 0,
                            margin: 0,
                            listStyle: 'none',

                            '& > li': {
                                position: 'relative',

                                '&:not(:last-child)': {
                                    marginBottom: [4, null, 0],
                                    marginRight: [0, null, 5],
                                },
                            },
                        },

                        a: {
                            variant: 'text.nav',
                            display: 'block',
                        },
                    },

                    'body.no-js &': {
                        display: 'block',
                        marginLeft: 'auto',
                    },
                }}
            >
                <ul className="nav__menu">
                    {navItems.map((navItem, index) => (
                        <li
                            key={index}
                            ref={(li) => (navList.current[index] = li)}
                        >
                            <TransitionLinkFadeUp
                                activeClassName="is-active"
                                to={navItem.url}
                            >
                                {navItem.name}
                            </TransitionLinkFadeUp>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav
                className={'nav ' + `${navVisible ? 'is-open' : ''}`}
                sx={{
                    'body.js &': {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100vh',
                        padding: '30px',
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        visibility: 'hidden',
                        transition: 'visibility 0s linear 2s',

                        ul: {
                            display: 'flex',
                            alignItems: 'center',
                            padding: 0,
                            margin: 0,
                            listStyle: 'none',

                            '& > li': {
                                position: 'relative',
                                textAlign: 'center',

                                '&:not(:last-child)': {
                                    marginBottom: 4,
                                },
                            },
                        },

                        a: {
                            display: 'block',
                            color: 'text',
                            fontSize: 9,
                            lineHeight: 1,
                            opacity: 0,
                            transform: ['translate(0, 25%)', null, 'none'],
                            transition: [
                                'opacity 1s cubic-bezier(.19, 1, .22, 1), transform 1s cubic-bezier(.19, 1, .22, 1)',
                                null,
                                'none',
                            ],
                        },

                        '.nav__background': {
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0',
                            backgroundColor: 'muted',
                            transform: 'scaleY(0)',
                            transformOrigin: 'top',
                            transition:
                                'transform 2s cubic-bezier(.19, 1, .22, 1) .25s',
                        },

                        '.nav__menu': {
                            position: 'relative',
                            zIndex: '1',
                        },

                        '&.is-open': {
                            visibility: 'visible',
                            transition: 'visibility 0s linear 0s',

                            a: {
                                opacity: ['1'],
                                transform: 'none',
                                transition:
                                    'opacity 1s cubic-bezier(.19, 1, .22, 1) 0.25s, transform 1s cubic-bezier(.19, 1, .22, 1) 0.25s',
                            },

                            '.nav__background': {
                                transform: 'scale(1)',
                                transition:
                                    'transform 2s cubic-bezier(.19, 1, .22, 1)',
                            },
                        },
                    },
                }}
            >
                <ul id="menu" className="nav__menu">
                    {navItems.map((navItem, index) => (
                        <li
                            key={index}
                            ref={(li) => (navList.current[index] = li)}
                        >
                            <TransitionLinkFadeUp
                                activeClassName="is-active"
                                to={navItem.url}
                                onClick={toggleNavVisible}
                            >
                                {navItem.name}
                            </TransitionLinkFadeUp>
                        </li>
                    ))}
                </ul>
                <div className="nav__background"></div>
            </nav>
        </>
    );
};

export default Nav;
