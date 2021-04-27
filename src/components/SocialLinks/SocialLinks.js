/** @jsx jsx */
import { jsx } from 'theme-ui';

const SocialLinks = (props) => {
    const copyToClipboard = () => {
        const inputEmail = document.createElement('input');

        inputEmail.value = 'kenny@kennytran.com';

        inputEmail.style.position = 'absolute';
        inputEmail.style.left = '-9999px';
        inputEmail.style.top = '0px';

        document.body.appendChild(inputEmail);

        inputEmail.focus();
        inputEmail.select();

        try {
            document.execCommand('copy');
            alert('Copied ' + inputEmail.value + ' to clipboard');
        } finally {
            document.body.removeChild(inputEmail);
        }
    };

    return (
        <ul
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0,
                listStyle: 'none',

                '& > li': {
                    '&:not(:last-child)': {
                        marginRight: 5,
                    },
                    svg: {
                        display: 'block',
                        fill: 'text',
                    },
                },
            }}
        >
            <li>
                <a href="https://github.com/kennytranco" aria-label="Github">
                    <svg
                        width="28"
                        height="23"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.2 14.837c0 1.173-.624 3.094-2.1 3.094S7 16.01 7 14.837s.624-3.094 2.1-3.094 2.1 1.92 2.1 3.094zm16.8-2.51c0 1.828-.187 3.764-1.02 5.443-2.212 4.388-8.29 4.285-12.642 4.285-4.421 0-10.861.155-13.16-4.285C.327 16.108 0 14.155 0 12.327c0-2.4.81-4.669 2.42-6.508a8.821 8.821 0 01-.448-2.796c0-1.231.285-1.85.851-2.967 2.643 0 4.335.515 6.347 2.062a22.733 22.733 0 015.174-.573c1.575 0 3.162.166 4.69.527C21.017.542 22.71.056 25.323.056c.571 1.117.851 1.736.851 2.967 0 .94-.151 1.874-.449 2.762C27.329 7.64 28 9.927 28 12.327zM23.8 15c0-2.462-1.552-4.632-4.273-4.632-1.098 0-2.15.19-3.255.337-.866.129-1.733.18-2.622.18-.884 0-1.75-.051-2.622-.18-1.087-.146-2.15-.337-3.255-.337-2.72 0-4.273 2.17-4.273 4.632 0 4.924 4.674 5.68 8.743 5.68h2.802c4.087 0 8.755-.75 8.755-5.68zm-4.2-3.257c-1.476 0-2.1 1.92-2.1 3.094 0 1.173.624 3.094 2.1 3.094s2.1-1.92 2.1-3.094-.624-3.094-2.1-3.094z" />
                    </svg>
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/company/kennytranco"
                    aria-label="LinkedIn"
                    sx={{
                        position: 'relative',
                        top: '-3px',
                    }}
                >
                    <svg
                        width="25"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M5.556 25H0V8.333h5.556V25zm19.438 0H19.66v-8.245c0-1.964-.04-4.484-2.78-4.484-2.779 0-3.205 2.135-3.205 4.343V25h-5.34V8.064h5.127v2.31h.075c.714-1.33 2.457-2.735 5.058-2.735 5.411 0 6.406 3.505 6.406 8.058V25h-.006z" />
                        <circle cx="2.778" cy="2.778" r="2.778" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/kennytranco" aria-label="Twitter">
                    <svg
                        width="29"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M26.02 5.981c.018.263.018.525.018.788C26.038 14.775 20.058 24 9.127 24A16.57 16.57 0 010 21.281c.478.056.938.075 1.435.075 2.779 0 5.337-.956 7.38-2.587-2.614-.056-4.804-1.8-5.558-4.2a7.36 7.36 0 001.122.093c.534 0 1.068-.075 1.565-.206-2.724-.562-4.766-3-4.766-5.944v-.074c.79.45 1.711.73 2.686.768a6.083 6.083 0 01-2.65-5.044c0-1.125.295-2.156.81-3.056C4.95 4.781 9.348 7.181 14.28 7.444a6.961 6.961 0 01-.147-1.388C14.132 2.72 16.782 0 20.075 0c1.712 0 3.257.731 4.343 1.912A11.57 11.57 0 0028.19.45a6.02 6.02 0 01-2.613 3.337A11.74 11.74 0 0029 2.85a12.911 12.911 0 01-2.98 3.131z" />
                    </svg>
                </a>
            </li>
            <li>
                <button
                    aria-label="Email"
                    onClick={copyToClipboard}
                    sx={{
                        display: 'block',
                        padding: 0,
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 0,
                    }}
                >
                    <svg
                        width="29"
                        height="23"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M28.45 7.006c.221-.182.55-.012.55.275v11.966c0 1.55-1.218 2.809-2.719 2.809H2.72C1.218 22.056 0 20.798 0 19.247V7.287c0-.293.323-.457.55-.276C1.817 8.03 3.5 9.323 9.277 13.66c1.195.9 3.211 2.797 5.222 2.785 2.022.018 4.078-1.92 5.228-2.785 5.777-4.336 7.454-5.635 8.723-6.653zM14.5 15.18c1.314.024 3.206-1.725 4.157-2.446 7.517-5.689 8.089-6.185 9.822-7.603.328-.266.521-.68.521-1.117V2.892C29 1.326 27.782.056 26.281.056H2.72C1.218.056 0 1.326 0 2.892v1.122c0 .437.193.845.521 1.117 1.733 1.412 2.305 1.914 9.822 7.603.951.721 2.843 2.47 4.157 2.446z" />
                    </svg>
                </button>
            </li>
        </ul>
    );
};

export default SocialLinks;
