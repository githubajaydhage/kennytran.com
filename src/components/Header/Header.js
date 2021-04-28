import { useState } from 'react';

/** @jsx jsx */
import { jsx, Container } from 'theme-ui';

import Nav from '../Nav/Nav';
import NavTrigger from '../NavTrigger/NavTrigger';
import TransitionLinkFadeUp from '../TransitionLinkFadeUp/TransitionLinkFadeUp';

import SVGLogoKennyTran from '../../svgs/logo-kenny-tran.svg';

const Header = (props) => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNavVisible = () => setNavVisible(!navVisible);

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
                <TransitionLinkFadeUp
                    to="/"
                >
                    <SVGLogoKennyTran
                        sx={{
                            display: 'block',
                            fill: 'text',
                        }}
                    />
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
