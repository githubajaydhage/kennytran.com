/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';

const TextSplit = (props) => {
    return (
        <div
            className="text-split"
            sx={{
                paddingTop: [6, 7],
                position: 'relative',
                backgroundColor: 'background',

                h3: {
                    fontSize: 1,
                    marginBottom: 3,
                },

                ul: {
                    padding: '0',
                    margin: '0',
                    listStyle: 'none',

                    li: {
                        fontSize: [5, 6],
                    },
                },

                '.text-split__divider': {
                    width: '1px',
                    height: ['calc(100% + 20px)', 'calc(100% + 80px)'],
                    position: 'absolute',
                    top: '0',
                    left: ['25px', '50px', '50%'],
                    backgroundColor: 'border',
                },
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    paddingBottom: [7],
                }}
            >
                <Grid columns={[1, null, 2]}>
                    <Box
                        sx={{
                            paddingLeft: [5, null, '0', null, 7],
                            paddingRight: [5, null, '50px', null, 7],
                        }}
                    >
                        <h3>Services</h3>
                        <ul>
                            <li>Front-end Templates</li>
                            <li>JAMStack Websites</li>
                            <li>WordPress Websites</li>
                            <li>WooCommerce Stores</li>
                            <li>Shopify Stores</li>
                        </ul>
                    </Box>
                    <Box
                        sx={{
                            paddingTop: [6, 7],
                            paddingLeft: [5, null, '50px', null, 7],
                            paddingRight: [5, null, '0', null, 7],
                        }}
                    >
                        <h3>Technologies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>WordPress</li>
                            <li>Gatsby</li>
                            <li>Eleventy</li>
                        </ul>
                    </Box>
                </Grid>
                <div className="text-split__divider"></div>
            </Container>
        </div>
    );
};

export default TextSplit;
