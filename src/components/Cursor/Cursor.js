import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

/** @jsx jsx */
import { jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

const Cursor = ({ path }) => {
    const cursorRef = useRef(null);
    const cursorFollowRef = useRef(null);

    useEffect(() => {
        function setFromEvent(event) {
            gsap.to(cursorRef.current, 0.1, {
                x: event.clientX,
                y: event.clientY,
            });

            gsap.to(cursorFollowRef.current, 0.3, {
                x: event.clientX,
                y: event.clientY,
            });
        }

        var hoverItems = document.querySelectorAll('a, button, [role="button"]');

        hoverItems.forEach(function (anchor) {
            anchor.addEventListener('mouseover', function hover(event) {
                gsap.to(cursorRef.current, 0.75, {
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    scale: '0',
                });

                if(anchor.classList.contains('button') || anchor.classList.contains('swiper-button')) {
                    gsap.to(cursorFollowRef.current, 0.75, {
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scale: 0,
                    });
                } else {
                    gsap.to(cursorFollowRef.current, 0.75, {
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scale: 2.5,
                    });
                }
            });

            anchor.addEventListener('mouseleave', function leave() {
                gsap.to(cursorRef.current, 0.75, {
                    scale: 1,
                });

                gsap.to(cursorFollowRef.current, 0.75, {
                    scale: 1,
                });
            });
        });

        window.addEventListener('mousemove', setFromEvent);

        return () => {
            window.removeEventListener('mousemove', setFromEvent);
        };
    }, [path]);

    return (
        <>
            <div
                ref={cursorRef}
                className="cursor"
                sx={{
                    display: 'none',
                    width: '8px',
                    height: '8px',
                    position: 'fixed',
                    top: '-4px',
                    left: '-4px',
                    borderRadius: '50%',
                    zIndex: 'cursor',
                    backgroundColor: 'border',
                    pointerEvents: 'none',
                    userSelect: 'none',

                    '@media (hover: hover) and (pointer: fine)': {
                        display: 'block',
                    },
                }}
            ></div>
            <div
                ref={cursorFollowRef}
                className="cursor-follow"
                sx={{
                    display: 'none',
                    width: '40px',
                    height: '40px',
                    position: 'fixed',
                    top: '-20px',
                    left: '-20px',
                    zIndex: 'cursor',
                    borderColor: 'border',
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    pointerEvents: 'none',
                    userSelect: 'none',

                    '@media (hover: hover) and (pointer: fine)': {
                        display: 'block',
                    },
                }}
            ></div>
        </>
    );
};

export default Cursor;
