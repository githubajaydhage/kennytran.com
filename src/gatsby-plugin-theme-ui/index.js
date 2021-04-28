export default {
    breakpoints: ['576px', '768px', '992px', '1200px', '1400px'],
    useColorSchemeMediaQuery: true,
    colors: {
        black: '#15151B',
        blackLight: '#1C1C23',
        blue: '#33CCFF',
        pink: '#EE00ff',
        pinkLight: '#cc00ff',
        purpleDark: '#29112c',
        greyLight: '#F4F1EC',
        grey: '#979797',
        text: 'var(--theme-ui-colors-greyLight)',
        background: 'var(--theme-ui-colors-black)',
        border: 'var(--theme-ui-colors-grey)',
        primary: 'var(--theme-ui-colors-black)',
        secondary: 'var(--theme-ui-colors-greyLight)',
        accent: 'var(--theme-ui-colors-blue)',
        highlight: 'var(--theme-ui-colors-purpleDark)',
        muted: 'var(--theme-ui-colors-blackLight)',
    },
    fonts: {
        body: 'BwGradual, sans-serif',
        heading: 'BwGradual, sans-serif',
    },
    fontSizes: [12, 14, 16, 18, 21, 24, 36, 48, 60, 72, 96, 112],
    fontWeights: {
        body: 400,
        heading: 400,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.15,
    },
    forms: {
        input: {
            fontSize: [1, 3],
            padding: 0,
            paddingBottom: 2,
            borderColor: 'text',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: 0,

            '&:focus': {
                outline: 'none',
            },
        },
        textarea: {
            padding: [2, 3],
            marginTop: '6px',
            fontSize: [1, 3],
            borderColor: 'text',
            borderRadius: 0,

            '&:focus': {
                outline: 'none',
            },
        },
    },
    layout: {
        container: {
            paddingRight: ['25px', '50px', null, null, '75px', '100px'],
            paddingLeft: ['25px', '50px', null, null, '75px', '100px'],
        },
    },
    sizes: {
        container: 1920,
    },
    space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
    text: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        capitalised: {
            color: 'text',
            fontSize: 1,
            letterSpacing: '0.16em',
            lineHeight: 1,
            textTransform: 'uppercase',
        },
        jumbotron: {
            fontSize: ['60px', '80px', '100px', '120px', '130px', '160px'],
            lineHeight: '1.1',
            whiteSpace: [null, null, null, null, 'nowrap'],
        },
    },
    zIndices: {
        header: '100',
        nav: '100',
        navTrigger: '105',
    },
    styles: {
        root: {
            color: 'text',
            fontFamily: 'body',
            fontSize: '16px',
            lineHeight: '1.6',
            backgroundColor: 'background',
            boxSizing: 'border-box',
            overflowX: 'hidden',
        },
        h1: {
            variant: 'text.heading',
        },
        h2: {
            variant: 'text.heading',
        },
        h3: {
            variant: 'text.heading',
        },
        h4: {
            variant: 'text.heading',
        },
        h5: {
            variant: 'text.heading',
        },
        h6: {
            variant: 'text.heading',
        },
    },
};
