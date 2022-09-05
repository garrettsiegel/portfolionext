import Image from "next/image"
import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function ProjectCard({ project }) {
    const { title, meta, image, technology, description, link } = project.fields

  return (
    

        
    
    <div className="ui link cards">
        <div className="card">
            <div className="image">
                <Image src={'https:' + image.fields.file.url} alt={''} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} />
            </div>
            <div className="content">
                <div className="header">{ title }</div>
                <div className="meta">
                    <span className="date">{meta}</span>
                </div>
                <div className="meta">
                    {technology.map(tech => ( 
                        // eslint-disable-next-line react/no-unknown-property
                        <a key={tech} className="ui label">{tech}</a>
                    ))}
                </div>
                <div className="description">
                    {documentToReactComponents(description)}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    {documentToReactComponents(link)}
                </span>
            </div>
        </div>
        </div>
        
  
  )
}
