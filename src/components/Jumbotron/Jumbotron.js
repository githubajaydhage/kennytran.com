import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const Jumbotron = ({ mount }) => {
    const [ready, setReady] = useState(mount);
    const headingRef = useRef(null);
    const jumbotronRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: jumbotronRef.current,
                    start: 'top 75%',
                },
            });
            const headingSplit = new SplitText(headingRef.current, {
                type: 'lines, chars',
                linesClass: 'line',
            });
            const headingChars = headingSplit.chars;

            gsap.set(headingChars, {
                y: '100%',
                opacity: '0',
            });

            timeline.staggerTo(
                headingChars,
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
            ref={jumbotronRef}
            className="jumbotron"
            sx={{
                marginBottom: ['160px', '240px'],

                h1: {
                    variant: 'text.jumbotron',

                    '.line': {
                        overflow: 'hidden',
                    },
                },
            }}
        >
            <Container>
                <h1 ref={headingRef}>
                    Freelance <br /> Web Developer
                </h1>
            </Container>
        </div>
    );
};

export default Jumbotron;
