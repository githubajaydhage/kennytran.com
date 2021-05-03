import { useEffect, useRef, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** @jsx jsx */
import { jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const TransitionImage = ({ mount, image, alt, ...props }) => {
    const [ready, setReady] = useState(mount);
    const imageSrc = getImage(image);
    const imageRef = useRef(null);
    const imageBackgroundRef = useRef(null);
    const imageMaskRef = useRef(null);
    const imageMaskContainerRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 90%',
                },
            });

            timeline.to(
                imageBackgroundRef.current,
                {
                    duration: 1.75,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    scaleY: '0',
                    transformOrigin: 'top',
                },
                0.25
            );

            timeline.from(
                imageMaskRef.current,
                {
                    duration: 2,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '100%',
                },
                0
            );
        }
    }, [mount]);

    return (
        <div
            ref={imageRef}
            className="image"
            sx={{
                position: 'relative',
                overflow: 'hidden',

                '.image__background': {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                },
            }}
        >
            <div className="image__mask" ref={imageMaskRef}>
                <div
                    className="image__mask-container"
                    ref={imageMaskContainerRef}
                >
                    <GatsbyImage alt={alt} image={imageSrc} loading="eager" />
                </div>
            </div>
            <div
                ref={imageBackgroundRef}
                className="image__background"
                sx={{
                    backgroundColor: 'background',
                }}
            ></div>
        </div>
    );
};

export default TransitionImage;
