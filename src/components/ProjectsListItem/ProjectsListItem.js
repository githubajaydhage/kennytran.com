import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/** @jsx jsx */
import { jsx, Container, Divider } from 'theme-ui';

import SVGIconArrowRight from '../../svgs/icon-arrow-right.svg';

const ProjectsListItem = (props) => {
    const image = getImage(props.image);

    return (
        <div
            className={
                'projects-list-item -' + (props.id % 2 ? 'alternate' : '')
            }
            sx={{
                paddingBottom: [6, null, null, 7],
                position: 'relative',

                '.project-list-item__background': {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: ['80px', '30px', '60px', '80px'],
                    left: '0',
                    zIndex: '-1',
                    backgroundColor: 'muted',
                },

                '.project-list-item__container': {
                    display: [null, 'flex'],
                    alignItems: 'center',
                },

                '.project-list-item__image': {
                    width: [null, '50%'],
                    maxWidth: '680px',
                    marginRight: [null, 5, null, 6, 7],
                    marginBottom: [3, '0'],
                    position: 'relative',
                    overflow: 'hidden',

                    '.project-list-item__image-mask': {
                        position: 'relative',
                    },
                },

                '.project-list-item__details': {
                    flex: '1',
                    width: [null, '50%'],
                    maxWidth: '680px',
                    paddingTop: [null, '30px', '60px', '80px'],
                },

                '.project-list-item__title': {
                    marginBottom: [3],
                    fontSize: [6, null, 7, 8, 9],
                    lineHeight: 'heading',
                },

                '.project-list-item__role': {
                    marginBottom: [5, null, 6, 7],
                },

                '.project-list-item__footer': {
                    overflow: 'hidden',
                },

                '.project-list-item__cta': {
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: [4, 3, 4],
                    color: 'text',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',

                    svg: {
                        marginLeft: 2,
                    },
                },

                '.project-list-item__hr': {
                    margin: '0',
                },

                '&.-alternate': {
                    backgroundColor: 'transparent',

                    '.project-list-item__background': {
                        backgroundColor: 'transparent',
                    },

                    '.project-list-item__container': {
                        flexDirection: 'row-reverse',
                    },

                    '.project-list-item__image': {
                        marginRight: '0',
                        marginLeft: [null, 5, null, 6, 7],
                    },

                    '.project-list-item__cta': {
                        justifyContent: 'flex-end',
                    },
                },
            }}
        >
            <Container>
                <div className="project-list-item__container">
                    <div className="project-list-item__image">
                        <div className="project-list-item__image-mask">
                            <div className="project-list-item__image-mask-container">
                                <GatsbyImage image={image} alt={props.name} />
                            </div>
                        </div>
                    </div>
                    <div className="project-list-item__details">
                        <h2 className="project-list-item__title">
                            {props.name}
                        </h2>
                        <div className="project-list-item__role">
                            {props.role}
                        </div>
                        <footer className="project-list-item__footer">
                            <a
                                className="project-list-item__cta"
                                href={props.url}
                            >
                                <span>Visit Site</span>
                                <SVGIconArrowRight />
                            </a>
                        </footer>
                        <Divider />
                    </div>
                </div>
            </Container>
            <div className="project-list-item__background"></div>
        </div>
    );
};

export default ProjectsListItem;
