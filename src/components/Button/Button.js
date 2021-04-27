/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = (props) => {
    return (
        <button
            className={'button ' + props.className}
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
            sx={{
                width: ['120px', '160px'],
                height: ['120px', '160px'],
                padding: 0,
                position: 'relative',
                color: 'text',
                fontSize: [1, 4],
                lineHeight: '20px',
                background: 'none',
                border: 'none',
                whiteSpace: 'nowrap',

                '::before': {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'border',
                    borderRadius: '50%',
                },

                '&:focus': {
                    outline: 'none',
                },
            }}
        >
            {props.children}
        </button>
    );
};

export default Button;
