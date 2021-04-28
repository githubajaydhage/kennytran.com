/** @jsx jsx */
import { jsx } from 'theme-ui';

import ProjectsListItem from '../ProjectsListItem/ProjectsListItem';

const ProjectsList = (props) => {
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
                    <ProjectsListItem id={index} {...project} />
                </li>
            ))}
        </ul>
    );
};

export default ProjectsList;
