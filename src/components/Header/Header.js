import { useState } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

/** @jsx jsx */
import { jsx, Container } from 'theme-ui';

import Nav from '../Nav/Nav';
import NavTrigger from '../NavTrigger/NavTrigger';

import SVGLogoKennyTran from '../../svgs/logo-kenny-tran.svg';

const Header = (props) => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNavVisible = () => setNavVisible(!navVisible);

    return (
        <header
            className="header"
            sx={{
                paddingTop: ['30px', null, '40px'],
                paddingBottom: ['30px', null, '40px'],
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <TransitionLink to="/">
                    <SVGLogoKennyTran
                        sx={{
                            display: 'block',
                            fill: 'text',
                        }}
                    />
                </TransitionLink>
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
