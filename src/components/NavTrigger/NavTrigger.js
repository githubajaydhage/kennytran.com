import { useEffect, useRef } from 'react';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const NavTrigger = (props) => {
    return (
        <button
            aria-controls="menu"
            aria-expanded={props.navVisible}
            onClick={props.toggleNavVisible}
            sx={{
                display: ['block', null, 'none'],
                width: '60px',
                height: '60px',
                padding: 0,
                marginLeft: 'auto',
                position: 'relative',
                zIndex: 'navTrigger',
                textIndent: '150%',
                background: 'none',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'border',
                borderRadius: '50%',
                outline: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',

                '&[aria-expanded=true]': {
                    span: {
                        background: 'rgba(0, 0, 0, 0)',

                        '&:after': {
                            width: '100%',
                            bottom: 0,
                            transform: 'rotate(-45deg)',
                            background: (theme) => `${theme.colors.text}`,
                        },

                        '&:before': {
                            width: '100%',
                            top: 0,
                            transform: 'rotate(45deg)',
                            background: (theme) => `${theme.colors.text}`,
                        },
                    },
                },

                'body.no-js &': {
                    display: 'none',
                },
            }}
        >
            Menu
            <span
                sx={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: (theme) => `${theme.colors.text}`,

                    '&, &:after, &:before': {
                        transition:
                            'transform .3s cubic-bezier(.19, 1, .22, 1)',
                    },

                    ':before, :after': {
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: '2px',
                        position: 'absolute',
                        right: 0,
                        background: (theme) => `${theme.colors.text}`,
                    },

                    ':after': { bottom: '8px' },
                    ':before': { top: '8px' },
                }}
            ></span>
        </button>
    );
};

export default NavTrigger;
