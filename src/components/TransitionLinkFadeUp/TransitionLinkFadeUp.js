import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

const TransitionLinkFadeUp = ({children, to}) => {
    const enableScroll = () => {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    }

    const disableScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
    }

    const exitTransition = {
        length: 2,
        trigger: ({ node }) => {
            disableScroll();

            var main = node;
            gsap.to(main, {
                duration: 2,
                ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                y: '-25vh',
                opacity: 0,
            });
        },
    };

    const enterTransition = {
        length: 1.5,
        trigger: ({ node }) => {
            var main = node;
            gsap.fromTo(
                main,
                { y: '100vh' },
                {
                    duration: 1.5,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '0vh',
                    onComplete: function() {
                        enableScroll();
                    }
                }
            );
        },
    };

    return (
        <TransitionLink
            to={to}
            exit={exitTransition}
            entry={enterTransition}
            preventScrollJump
        >
            {children}
        </TransitionLink>
    );
};

export default TransitionLinkFadeUp;
