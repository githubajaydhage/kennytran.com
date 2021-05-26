/** @jsx jsx */
import { jsx } from 'theme-ui';

const Section = (props) => {
    return (
        <section
            className={'section ' + props.className}
            sx={{
                position: 'relative',

                ':first-of-type': {
                    paddingTop: ['160px', '240px'],
                },
            }}
        >
            {props.children}
        </section>
    );
};

export default Section;
