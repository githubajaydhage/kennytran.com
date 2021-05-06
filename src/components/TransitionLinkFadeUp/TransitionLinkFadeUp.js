import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const TransitionLinkFadeUp = ({ children, onClick, to }) => {
    const enableScroll = () => {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    };

    const disableScroll = () => {
        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    };

    const exitTransition = {
        length: 2,
        trigger: ({ node }) => {
            disableScroll();

            gsap.to(node, {
                duration: 2,
                ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                y: '-25vh',
                opacity: 0,
            });

            ScrollTrigger.refresh();
        },
    };

    const enterTransition = {
        length: 2,
        trigger: ({ node }) => {
            gsap.fromTo(
                node,
                { y: '100vh' },
                {
                    duration: 2,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '0vh',
                    onComplete: function () {
                        enableScroll();

                        ScrollTrigger.refresh();
                    },
                }
            );
        },
    };

    return (
        <TransitionLink
            to={to}
            exit={exitTransition}
            entry={enterTransition}
            onClick={onClick}
            preventScrollJump
        >
            {children}
        </TransitionLink>
    );
};

export default TransitionLinkFadeUp;
