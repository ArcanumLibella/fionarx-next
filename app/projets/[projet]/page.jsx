import { ProjectLayout } from "@/app/_components/layouts/ProjectLayout"
import React from 'react'

const ProjectPage = ({ params, data }) => {
  // const { 
  //   title,
  //   description,
  //   slug,
  //   year,
  //   preview,
  //   technos,
  //   links
  // } = data.strapiProject

  const { projet } = params

  return (
    <ProjectLayout
      title={projet}
      description={"description"}
      slug={"slug"}
      year={"year"}
      preview={"preview"}
      // technos={"technos"}
      // links={"links"}
    />
  )
}

export default ProjectPage