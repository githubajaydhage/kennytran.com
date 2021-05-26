import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** @jsx jsx */
import { jsx } from 'theme-ui';

import SVGChevronDown from '../../svgs/icon-chevron-down.svg';

const SectionHeading = ({className, mount, text}) => {
    const [ready, setReady] = useState(mount);
    const SectionHeadingRef = useRef(null);

    useEffect(() => {
        setReady(mount);

        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: SectionHeadingRef.current,
                    start: 'top 90%',
                },
            });

            timeline.from(
                SectionHeadingRef.current,
                {
                    duration: 2,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '25%',
                    opacity: '0',
                },
                1
            );
        }
    }, [mount]);

    return (
        <h1
            ref={SectionHeadingRef}
            className={'section-heading ' + className}
            sx={{
                variant: 'text.capitalised',
                display: 'inline-flex',
                alignItems: 'center',

                i: {
                    marginRight: 3,
                    svg: {
                        path: {
                            stroke: 'text'
                        }
                    }
                }
            }}
        >
            <i>
                <SVGChevronDown />
            </i>
            {text}
        </h1>
    );
};

export default SectionHeading;
