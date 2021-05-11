import { useEffect, useRef, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** @jsx jsx */
import { jsx, Container, Divider } from 'theme-ui';

import SVGIconArrowRight from '../../svgs/icon-arrow-right.svg';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const ProjectsListItem = ({ id, mount, ...props }) => {
    const [ready, setReady] = useState(mount);
    const backgroundRef = useRef(null);
    const ctaRef = useRef(null);
    const dividerRef = useRef(null);
    const headingRef = useRef(null);
    const image = getImage(props.image);
    const imageRef = useRef(null);
    const imageBackgroundRef = useRef(null);
    const imageMaskRef = useRef(null);
    const imageMaskContainerRef = useRef(null);
    const itemRef = useRef(null);
    const roleRef = useRef(null);

    useEffect(() => {
        setReady(mount);
        if (mount) {
            const headingSplit = new SplitText(headingRef.current, {
                type: 'lines, words',
                linesClass: 'line',
            });
            const headingWords = headingSplit.words;
            const roleSplit = new SplitText(roleRef.current, {
                type: 'lines, words',
                linesClass: 'line',
            });
            const roleWords = roleSplit.words;
            let timeline = null;

            if (id === 0) {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: itemRef.current,
                        start: 'top bottom',
                    },
                });
            } else {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: itemRef.current,
                        start: 'top 75%',
                    },
                });
            }

            timeline
                .from(
                    imageMaskRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '100%',
                    },
                    0
                )
                .to(
                    imageBackgroundRef.current,
                    {
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scaleY: '0',
                        transformOrigin: 'top',
                    },
                    0.25
                )
                .from(
                    backgroundRef.current,
                    {
                        delay: 0.25,
                        duration: 2,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scaleY: '0',
                        transformOrigin: 'bottom',
                    },
                    0
                )
                .from(
                    headingWords,
                    {
                        duration: 1.5,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '100%',
                        opacity: '0',
                    },
                    0.5
                )
                .from(
                    roleWords,
                    {
                        duration: 1.5,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        y: '100%',
                        opacity: '0',
                    },
                    0.5
                )
                .from(
                    ctaRef.current,
                    {
                        duration: 1.5,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        x: '-10%',
                        opacity: '0',
                    },
                    0.5
                )
                .from(
                    dividerRef.current,
                    {
                        duration: 1.5,
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        width: '0%',
                    },
                    0.5
                );
        }
    }, [mount]);

    return (
        <div
            ref={itemRef}
            className={'projects-list-item -' + (id % 2 ? 'alternate' : '')}
            sx={{
                paddingBottom: [6, null, null, 7],
                position: 'relative',

                '.project-list-item__background': {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: ['80px', '30px', '60px', '80px'],
                    left: '0',
                    zIndex: '-1',
                    backgroundColor: 'muted',
                },

                '.project-list-item__container': {
                    display: [null, 'flex'],
                    alignItems: 'center',
                },

                '.project-list-item__image': {
                    width: [null, '50%'],
                    maxWidth: '680px',
                    marginRight: [null, 5, null, 6, 7],
                    marginBottom: [3, '0'],
                    position: 'relative',
                    overflow: 'hidden',

                    '.project-list-item__image-mask': {
                        position: 'relative',
                    },

                    '.project-list-item__image-background': {
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        backgroundColor: 'background',
                    },
                },

                '.project-list-item__details': {
                    flex: '1',
                    width: [null, '50%'],
                    maxWidth: '680px',
                    paddingTop: [null, '30px', '60px', '80px'],
                },

                '.project-list-item__title': {
                    marginBottom: [3],
                    fontSize: [6, null, 7, 8, 9],
                    lineHeight: 'heading',

                    '.line': {
                        overflow: 'hidden',
                    },
                },

                '.project-list-item__role': {
                    marginBottom: [5, null, 6, 7],

                    '.line': {
                        overflow: 'hidden',
                    },
                },

                '.project-list-item__footer': {
                    overflow: 'hidden',
                },

                '.project-list-item__cta': {
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: [4, 3, 4],
                    color: 'text',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',

                    svg: {
                        marginLeft: 2,
                    },
                },

                '.project-list-item__hr': {
                    margin: '0',
                },

                '&.-alternate': {
                    backgroundColor: 'transparent',

                    '.project-list-item__background': {
                        backgroundColor: 'transparent',
                    },

                    '.project-list-item__container': {
                        flexDirection: 'row-reverse',
                    },

                    '.project-list-item__image': {
                        marginRight: '0',
                        marginLeft: [null, 5, null, 6, 7],
                    },

                    '.project-list-item__image-background': {
                        '::before': {
                            content: '""',
                            width: '100%',
                            height: ['80px', '30px', '60px', '80px'],
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            zIndex: '1',
                            backgroundColor: 'muted',
                        },
                    },

                    '.project-list-item__cta': {
                        justifyContent: 'flex-end',
                    },
                },
            }}
        >
            <Container>
                <div className="project-list-item__container">
                    <div ref={imageRef} className="project-list-item__image">
                        <div
                            className="project-list-item__image-mask"
                            ref={imageMaskRef}
                        >
                            <div
                                className="project-list-item__image-mask-container"
                                ref={imageMaskContainerRef}
                            >
                                <GatsbyImage
                                    image={image}
                                    alt={props.name}
                                    loading="eager"
                                />
                            </div>
                        </div>
                        <div
                            ref={imageBackgroundRef}
                            className="project-list-item__image-background"
                            sx={{
                                backgroundColor: 'background',
                            }}
                        ></div>
                    </div>
                    <div className="project-list-item__details">
                        <h2
                            ref={headingRef}
                            className="project-list-item__title"
                        >
                            {props.name}
                        </h2>
                        <div ref={roleRef} className="project-list-item__role">
                            {props.role}
                        </div>
                        <footer className="project-list-item__footer">
                            <a
                                ref={ctaRef}
                                className="project-list-item__cta"
                                href={props.url}
                            >
                                <span>Visit Site</span>
                                <SVGIconArrowRight />
                            </a>
                        </footer>
                        <Divider ref={dividerRef} />
                    </div>
                </div>
            </Container>
            <div
                ref={backgroundRef}
                className="project-list-item__background"
            ></div>
        </div>
    );
};

export default ProjectsListItem;
