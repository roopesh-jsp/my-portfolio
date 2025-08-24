import ProjectTimeline from "@/components/ProjectTimeLine";
import React from "react";
import { projectsData } from "@/data/data";

function ProjectsPg() {
  return (
    <div>
      <ProjectTimeline projectsData={projectsData} />
    </div>
  );
}

export default ProjectsPg;
