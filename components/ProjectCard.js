import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '/components/ProjectCard.module.css'

export default function ProjectCard({ project }) {
    const { title, meta, image, technology, description, link } = project.fields

  return (
    <div className={styles.card}>
        <div className={styles.cardwrapper}>

            <div className={styles.cardmain}>
                <div className={styles.cardimage}>
                    <Image src={'https:' + image.fields.file.url} alt={''} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} />
                </div>

                <div className={styles.cardcontent}>

                    <div className={styles.cardheader}>
                        <h3>{title}</h3>
                    </div>

                    <div className={styles.cardmeta}>
                        <span>{meta}</span>
                    </div>

                    <div className={styles.cardtech}>
                        {technology.map(tech => ( 
                            // eslint-disable-next-line react/no-unknown-property
                            <a key={tech}>{tech}</a>
                        ))}
                    </div>
                    <div className={styles.carddescription}>
                        {documentToReactComponents(description)}
                    </div>
                </div>
            </div>

            <div className={styles.cardbottom}>
                    {documentToReactComponents(link)}
            </div>

        </div>
    </div>
  )
}
