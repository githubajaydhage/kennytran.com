import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper/bundle';

/** @jsx jsx */
import { jsx, Container } from 'theme-ui';

import 'swiper/swiper-bundle.css';

import SVGIconArrowLeft from '../../svgs/icon-arrow-left.svg';
import SVGIconArrowRight from '../../svgs/icon-arrow-right.svg';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Testimonial = ({ mount, ...props }) => {
    const [ready, setReady] = useState(mount);
    const testimonialRef = useRef(null);
    const backgroundRef = useRef(null);
    const contentRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);
    const sliderArrowLeftRef = useRef(null);
    const sliderArrowRightRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const swiper = new Swiper('.swiper-container', {
                autoplay: {
                    delay: 10000,
                },
                loop: true,
                loopedSlides: props.testimonials.length,
                preventClicks: false,
                preventClicksPropagation: false,
                speed: 750,
                touchRatio: 0,
                navigation: {
                    nextEl: '.testimonial__next',
                    prevEl: '.testimonial__prev',
                },
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: testimonialRef.current,
                    start: 'top 75%',
                },
            });

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
                    headingRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '20px',
                        opacity: '0',
                    },
                    0.5

                )
                .from(
                    sliderRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '10%',
                        opacity: '0',
                    },
                    0.6
                )
                .from(
                    sliderArrowLeftRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        x: '-100%',
                        opacity: '0',
                    },
                    0.6
                )
                .from(
                    sliderArrowRightRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        x: '100%',
                        opacity: '0',
                    },
                    0.6
                );
        }
    }, [mount]);

    return (
        <div
            ref={testimonialRef}
            className="testimonial"
            sx={{
                py: [6, 7],
                position: 'relative',
                textAlign: [null, null, 'center'],

                p: {
                    fontSize: [3, 4],
                },

                blockquote: {
                    maxWidth: '800px',
                    mx: 'auto',
                },

                '.swiper-container': {
                    paddingBottom: ['100px', null, '0'],
                },

                '.swiper-wrapper': {
                    alignItems: [null, null, 'center'],
                },

                '.swiper-slide': {
                    px: [null, null, '80px'],
                },

                '.testimonial__background': {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                    backgroundColor: 'muted',
                },

                '.testimonial__prev, .testimonial__next': {
                    display: 'grid',
                    width: '80px',
                    height: '80px',
                    position: 'absolute',
                    top: [null, null, '50%'],
                    bottom: ['0', null, 'auto'],
                    zIndex: '1',
                    outline: ' none',

                    'svg': {
                        'path': {
                            fill: 'text',
                            transition: 'fill 0.75s cubic-bezier(.19, 1, .22, 1)',
                        }
                    },

                    '::before, *': {
                        gridColumn: '1',
                        gridRow: '1',
                        margin: 'auto',
                    },

                    '::before': {
                        content: '""',
                        display: 'block',
                        width: '60px',
                        height: '60px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'border',
                        borderRadius: '50%',
                        transition: 'border-color 0.75s cubic-bezier(.19, 1, .22, 1), transform 0.75s cubic-bezier(.19, 1, .22, 1)',
                    },

                    ':hover': {
                        'svg': {
                            'path': {
                                fill: 'accent'
                            }
                        },

                        '::before': {
                            borderColor: 'accent',
                            transform: 'scale(1.25)'
                        }
                    },
                },

                '.testimonial__prev': {
                    cursor: 'pointer',
                    left: [null, null, '0'],
                    right: ['0', null, 'auto'],

                    transform: [
                        'translate(-100%, 0)',
                        null,
                        'translate(0, -50%)',
                    ],
                },

                '.testimonial__next': {
                    cursor: 'pointer',
                    right: ['0'],
                    transform: [null, null, 'translate(0, -50%)'],
                },

                '.testimonial__heading': {
                    variant: 'text.capitalised',
                    marginBottom: 5,
                    fontSize: 1,
                },

                '.testimonial__quote': {
                    marginBottom: 6,
                },

                '.testimonial__cite': {
                    variant: 'text.capitalised',
                    fontSize: 0,
                },
            }}
        >
            <Container>
                <div ref={contentRef} sx={{ position: 'relative' }}>
                    <h2 ref={headingRef} className="testimonial__heading">Testimonials</h2>
                    <div ref={sliderRef} className="swiper-container">
                        <div className="swiper-wrapper">
                            {props.testimonials.map((testimonial, index) => (
                                <div className="swiper-slide" key={index}>
                                    <blockquote>
                                        <div
                                            className="testimonial__quote"
                                            dangerouslySetInnerHTML={{
                                                __html: testimonial.quote,
                                            }}
                                        />
                                        <footer
                                            className="testimonial__cite"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '- ' +
                                                    testimonial.name +
                                                    ', <cite>' +
                                                    testimonial.company +
                                                    '</cite>',
                                            }}
                                        />
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div ref={sliderArrowLeftRef} className="testimonial__prev swiper-button">
                        <SVGIconArrowLeft />
                    </div>
                    <div ref={sliderArrowRightRef} className="testimonial__next swiper-button">
                        <SVGIconArrowRight />
                    </div>
                </div>
            </Container>
            <div ref={backgroundRef} className="testimonial__background"></div>
        </div>
    );
};

export default Testimonial;
