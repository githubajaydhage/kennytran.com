import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** @jsx jsx */
import { jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const TransitionFadeUp = ({ children, mount }) => {
    const [ready, setReady] = useState(mount);
    const itemRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: itemRef.current,
                    start: 'top 90%',
                },
            });

            timeline.from(
                itemRef.current,
                {
                    duration: 2,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '25%',
                    opacity: '0',
                },
                0
            );
        }
    }, [mount]);

    return <div ref={itemRef}>{children}</div>;
};

export default TransitionFadeUp;

TransitionFadeUp.propTypes = {
    children: PropTypes.node.isRequired,
};
