import React, { useState } from 'react';
import ProjectList from './ProjectList';
import SelectedProject from './SelectedProject';
import DataCode from '../../data/code.json';

const ProjectsData = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (itemId) => {
    setSelectedProjectId(itemId);
  };

  const selectedProject = DataCode.find(
    (project) => project['item-id'] === selectedProjectId
  );

  return (
    <div className="Projects">
      <ProjectList projects={DataCode} onProjectClick={handleProjectClick} />
      <SelectedProject project={selectedProject} />
    </div>
  );
};

export default ProjectsData;
