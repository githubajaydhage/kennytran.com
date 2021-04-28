import TransitionLinkFadeUp from '../TransitionLinkFadeUp/TransitionLinkFadeUp';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const Nav = (props) => {
    const navItems = [
        {
            name: 'Profile',
            url: '/profile',
        },
    ];

    return (
        <nav
            className={'nav ' + props.className}
            hidden={!props.navVisible}
            sx={{
                'body.js &': {
                    display: [null, null, 'flex'],
                    alignItems: 'center',
                    height: ['100vh', null, 'auto'],
                    padding: ['30px', null, '0'],
                    marginLeft: [null, null, 'auto'],
                    position: ['fixed', null, 'static'],
                    top: [0, null, 'auto'],
                    right: [0, null, 'auto'],
                    bottom: [0, null, 'auto'],
                    left: [0, null, 'auto'],
                    zIndex: 'nav',

                    '&:not([hidden])': {
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'muted',
                    },
                },

                'body.no-js &': {
                    display: 'block',
                    marginLeft: 'auto',
                },
            }}
        >
            <ul
                id="menu"
                sx={{
                    display: [null, null, 'flex'],
                    alignItems: ['center'],
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',

                    '& > li': {
                        '&:not(:last-child)': {
                            marginBottom: [4, null, 0],
                            marginRight: [0, null, 5],
                        },

                        '& > a': {
                            display: 'block',
                            color: 'text',
                            fontSize: [9, null, 1],
                            letterSpacing: [null, null, '0.16em'],
                            lineHeight: 1,
                            textDecoration: 'none',
                            textTransform: [null, null, 'uppercase'],
                            outline: 'none',

                            '&.is-active': {
                                color: 'tertiary',
                            },
                        },
                    },
                }}
            >
                {navItems.map((navItem, index) => (
                    <li key={index}>
                        <TransitionLinkFadeUp
                            activeClassName="is-active"
                            to={navItem.url}
                        >
                            {navItem.name}
                        </TransitionLinkFadeUp>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
