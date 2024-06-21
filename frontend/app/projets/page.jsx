import { ProjectsLayout } from "../_components/layouts/ProjectsLayout"

const ProjectPage = ({ children }) => {
  return (
    <ProjectsLayout>
      {children}
    </ProjectsLayout>
  )
}

export default ProjectPage