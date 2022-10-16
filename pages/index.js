import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.imageblock}>
            <Image src="/garrett-siegel.jpg" className={styles.avatar} width={250} height={250} layout={"intrinsic"} alt={''}/>
          </div>
          <div className={styles.toptext}>
            <p>I am an ambitious Front End Developer with years of industry experience working with Web Development, and Graphic, Motion, and 3D Design.</p>
            <p>I have a clean, scientific, and contemporary approach to design, a passion for aesthetically pleasing user interfaces, and I work with a wide range of programming languages and technologies.</p>
            <p>I have worked on many different development and design projects, in corporate and agency settings, as well as many years of freelance work and am skilled in managing projects, client needs, and solving problems, with a huge focus on effective communication.</p>
            <p>Please check out the rest of my site, my work, and a list of my current tech competencies below. Feel free to reach out any time, my email is:&nbsp;
              <Link href="mailto:garrett@submurgedcreative.com"><a>garrett@submurgedcreative.com</a></Link>
            </p>
          </div>
        </div>


        <div className={styles.bottom}>

          <div className={styles.techstack1}>
            <h3>Current Full-Time Tech Stack</h3>
            <div className={styles.labeldiv}>
              <a>Next.JS</a>
              <a>Headless CMS</a>
              <a>Jira</a>
              <a>Slack</a>
            </div>
          </div>

          <div className={styles.proservices}>
          <h3>Professional Services</h3>
          <p>I am experienced in providing the following professional services:</p>
          <div className={styles.labeldivalt}>
              <a>Dynamic Website Design</a>
              <a>Landing Page Builds</a>
              <a>Front End JavaScript Development</a>
              <a>Web Applications</a>
              <a>Back End Cloud Architecture</a>
              <a>Data Visualization</a>
              <a>WordPress Site Builds and Content Management</a>
              <a>User Interface Design</a>
              <a>User Experience Design</a>
              <a>Graphic, Motion, and 3D Design</a>
            </div>
          </div>

          <div className={styles.techstack2}>
            <h3>Tech Stack</h3>
            <p>I have experience working with following technologies:</p>

            <h4>Markup</h4>
            <div className={styles.labeldivalt2}>
              <a>HTML5</a>
              <a>CSS3</a>
              <a>SASS</a>
              <a>Flexbox</a>
              <a>CSS Grid</a>
              <a>Tailwind</a>
            </div>

            <h4>JavaScript</h4>
            <div className={styles.labeldivalt2}>
              <a>Vanilla JS</a>
              <a>React.JS</a>
              <a>JSX</a>
              <a>TypeScript</a>
            </div>

            <h4>Libraries</h4>
            <div className={styles.labeldivalt2}>
              <a>Bootstrap</a>
              <a>Material UI</a>
              <a>Semantic UI</a>
              <a>D3</a>
            </div>

            <h4>Back End</h4>
            <div className={styles.labeldivalt2}>
              <a>Node.js</a>
              <a>Express</a>
              <a>MongoDB</a>
              <a>AWS</a>
              <a>Firebase</a>
              <a>Firestore</a>
              <a>Postman</a>
            </div>

            <h4>CMS</h4>
            <div className={styles.labeldivalt2}>
              <a>WordPress</a>
              <a>WebFlow</a>
            </div>

            <h4>Design Software</h4>
            <div className={styles.labeldivalt2}>
              <a>Adobe Creative Cloud</a>
              <a>Figma</a>
              <a>Sketch</a>
            </div>

            <h4>Motion Design Software</h4>
            <div className={styles.labeldivalt2}>
              <a>Adobe After Effects</a>
              <a>Adobe Animate</a>
            </div>

            <h4>3D Modeling Software</h4>
            <div className={styles.labeldivalt2}>
              <a>Autodesk Maya</a>
              <a>Blender 3D</a>
            </div>

            <h4>Project Management Software</h4>
            <div className={styles.labeldivalt2}>
              <a>Agile Methodologies</a>
              <a>Basecamp</a>
            </div>

            <h4>Miscellaneous</h4>
            <div className={styles.labeldivalt2}>
              <a>Visual Studio Code</a>
              <a>Git</a>
              <a>NPM</a>
            </div>

          </div>

            

          <div className={styles.footerblockout}></div> 
        
        </div>
      
      
      

      

      

      
      
      </div>
    </>
    
  )
}
