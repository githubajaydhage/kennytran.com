import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';

/** @jsx jsx */
import { jsx, Container } from 'theme-ui';

import Nav from '../Nav/Nav';
import NavTrigger from '../NavTrigger/NavTrigger';
import TransitionLinkFadeUp from '../TransitionLinkFadeUp/TransitionLinkFadeUp';

import SVGLogoKennyTran from '../../svgs/logo-kenny-tran.svg';

const Header = (props) => {
    const [navVisible, setNavVisible] = useState(false);
    const logoRef = useRef(null);

    const toggleNavVisible = () => setNavVisible(!navVisible);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            {
                opacity: '0',
                y: '20px',
            },
            {
                duration: 2,
                ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                opacity: '1',
                y: '0',
            }
        );
    }, []);

    return (
        <header
            className="header"
            sx={{
                width: '100%',
                position: 'fixed',
                top: ['20px', null, '40px'],
                left: 0,
                zIndex: 'header',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <TransitionLinkFadeUp to="/">
                    <i ref={logoRef} sx={{ display: 'block' }}>
                        <SVGLogoKennyTran
                            sx={{
                                display: 'block',
                                fill: 'text',
                            }}
                        />
                    </i>
                </TransitionLinkFadeUp>
                <Nav
                    navVisible={navVisible}
                    toggleNavVisible={toggleNavVisible}
                />
                <NavTrigger
                    navVisible={navVisible}
                    toggleNavVisible={toggleNavVisible}
                />
            </Container>
        </header>
    );
};

export default Header;
