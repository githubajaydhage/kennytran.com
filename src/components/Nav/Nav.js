import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TransitionLinkFadeUp from '../TransitionLinkFadeUp/TransitionLinkFadeUp';

/** @jsx jsx */
import { jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

const Nav = (props) => {
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
        <nav
            className={'nav ' + props.className}
            hidden={!props.navVisible}
            sx={{
                'body.js &': {
                    display: [null, null, 'flex'],
                    alignItems: 'center',
                    height: ['100vh', null, 'auto'],
                    padding: ['30px', null, '0'],
                    marginLeft: 'auto',
                    position: ['fixed', null, 'static'],
                    top: [0, null, 'auto'],
                    right: [0, null, 'auto'],
                    bottom: [0, null, 'auto'],
                    left: [0, null, 'auto'],

                    '&:not([hidden])': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: 'muted',
                    },
                },

                'body.no-js &': {
                    display: 'block',
                    marginLeft: 'auto',
                },
            }}
        >
            <ul
                id="menu"
                sx={{
                    display: [null, null, 'flex'],
                    alignItems: 'center',
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',

                    '& > li': {
                        position: 'relative',
                        textAlign: ['center', null, 'left'],

                        '&:not(:last-child)': {
                            marginBottom: [4, null, 0],
                            marginRight: [0, null, 5],
                        },

                        '& > a': {
                            display: 'block',
                            color: 'text',
                            fontSize: 1,
                            letterSpacing: '0.16em',
                            lineHeight: 1,
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            outline: 'none',

                            '&.is-active': {
                                color: 'tertiary',
                            },
                        },
                    },
                }}
            >
                {navItems.map((navItem, index) => (
                    <li key={index} ref={(li) => (navList.current[index] = li)}>
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
    );
};

export default Nav;
