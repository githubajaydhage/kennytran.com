import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

/** @jsx jsx */
import { jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const TransitionLetters = ({ children, mount, ...props }) => {
    const [ready, setReady] = useState(mount);
    const textRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const textSplit = new SplitText(textRef.current, {
                type: 'lines, chars',
                linesClass: 'transition-letters__line',
            });
            const textChars = textSplit.chars;
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 90%',
                },
            });

            gsap.set(textChars, {
                y: '100%',
                opacity: '0',
            });

            timeline.staggerTo(
                textChars,
                2,
                {
                    y: '0',
                    opacity: '1',
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                },
                0.02
            );
        }
    }, [mount]);

    return (
        <div
            ref={textRef}
            className="transition-letters"
            sx={{
                '.transition-letters__line': {
                    overflow: 'hidden',
                },
            }}
        >
            {children}
        </div>
    );
};

export default TransitionLetters;

TransitionLetters.propTypes = {
    children: PropTypes.node.isRequired,
};
