/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

const Jumbotron = (props) => {
    return (
        <div
            className="jumbotron"
            sx={{
                marginBottom: ['160px', '240px'],

                h1: {
                    variant: 'text.jumbotron',
                },
            }}
        >
            <Container>
                <h1>Freelance <br /> Web Developer</h1>
            </Container>
        </div>
    );
};

export default Jumbotron;
