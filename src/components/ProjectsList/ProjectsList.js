/** @jsx jsx */
import { jsx } from 'theme-ui';

import ProjectsListItem from '../ProjectsListItem/ProjectsListItem';

const ProjectsList = ({ mount, ...props }) => {
    return (
        <ul
            className="projects-list"
            sx={{
                margin: '0',
                padding: '0',
                listStyle: 'none',
            }}
        >
            {props.projects.map((project, index) => (
                <li key={index}>
                    <ProjectsListItem id={index} mount={mount} {...project} />
                </li>
            ))}
        </ul>
    );
};

export default ProjectsList;
