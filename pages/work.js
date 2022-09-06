import { createClient } from "contentful"
import ProjectCard from "../components/ProjectCard"
import Masonry from 'react-masonry-css'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'project' })

    return {
        props: {
            projects: res.items
        }
    }

}

export default function work({ projects }) {
    console.log(projects)
  return (
    <div className="project-list">


      
        <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">

        
            {projects.map(project => (
                <ProjectCard key={project.sys.id} project={project} />
            ))}

        
       </Masonry>
       <div className="footerblockout"></div> 
    </div>
  )
}
