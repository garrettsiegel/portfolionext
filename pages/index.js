import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Garrett Siegel | Front End Developer</title>
        
      </Head>
      <div className={styles.container}>

      <div className={styles.left1}>
        <div className={styles.imageblock}>
          <Image src="/garrett-siegel.jpg" className={styles.avatar} width={200} height={200} layout={"intrinsic"} alt={''}/>

        </div>
        <div className={styles.left1text}>
        <p>I am an ambitious Front End Developer with years of industry experience working with Web Development, and Graphic, Motion, and 3D Design.</p>

        <p>I have a clean, scientific, and contemporary approach to design, a passion for aesthetically pleasing user interfaces, and I work with a wide range of programming languages and technologies.</p>

        <p>I have worked on many different development and design projects, in corporate and agency settings, as well as many years of freelance work and am skilled in managing projects, client needs, and solving problems, with a huge focus on effective communication.</p>

        <p>Please check out the rest of my site, my work, and a list of my current tech competencies below. Feel free to reach out any time, my email is: 
          <Link href="mailto:garrett@submurgedcreative.com"><a> garrett@submurgedcreative.com</a></Link>
        </p>
        </div>
        
      </div>


      <div className={styles.right1}>

        <div className={styles.techstack1}>
          <h3>Current Full-Time Tech Stack</h3>
          <div className="ui orange labels">
            <a className="ui label">Next.JS</a>
            <a className="ui label">Headless Magento 2</a>
            <a className="ui label">Jira</a>
            <a className="ui label">Slack</a>
          </div>
        </div>


        <div className={styles.proservices}>
        <h3>Professional Services</h3>
        <p>I am experienced in providing the following professional services:</p>
        <div className="ui teal labels">
            <a className="ui label">Dynamic Website Design</a>
            <a className="ui label">Landing Page Builds</a>
            <a className="ui label">Front End JavaScript Development</a>
            <a className="ui label">Web Applications</a>
            <a className="ui label">Back End Cloud Architecture</a>
            <a className="ui label">Data Visualization</a>
            <a className="ui label">WordPress Site Builds and Content Management</a>
            <a className="ui label">User Interface Design</a>
            <a className="ui label">User Experience Design</a>
            <a className="ui label">Graphic, Motion, and 3D Design</a>
          </div>
        </div>

        
        <div className={styles.techstack2}>
          <h3>Tech Stack</h3>
          <p>I have experience working with following technologies:</p>

          <h4>Markup</h4>
          <div className="ui gray labels">
            <a className="ui label">HTML5</a>
            <a className="ui label">CSS3</a>
            <a className="ui label">SASS</a>
            <a className="ui label">Flexbox</a>
            <a className="ui label">CSS Grid</a>
            <a className="ui label">Tailwind</a>
          </div>

          <h4>JavaScript</h4>
          <div className="ui gray labels">
            <a className="ui label">Vanilla JS</a>
            <a className="ui label">React.JS</a>
            <a className="ui label">JSX</a>
            <a className="ui label">TypeScript</a>
          </div>

          <h4>Libraries</h4>
          <div className="ui gray labels">
            <a className="ui label">Bootstrap</a>
            <a className="ui label">Material UI</a>
            <a className="ui label">Semantic UI</a>
            <a className="ui label">D3</a>
          </div>

          <h4>Back End</h4>
          <div className="ui gray labels">
            <a className="ui label">Node.js</a>
            <a className="ui label">Express</a>
            <a className="ui label">MongoDB</a>
            <a className="ui label">AWS</a>
            <a className="ui label">Firebase</a>
            <a className="ui label">Firestore</a>
            <a className="ui label">Postman</a>
          </div>

          <h4>CMS</h4>
          <div className="ui gray labels">
            <a className="ui label">WordPress</a>
            <a className="ui label">WebFlow</a>
          </div>

          <h4>Design Software</h4>
          <div className="ui gray labels">
            <a className="ui label">Adobe Creative Cloud</a>
            <a className="ui label">Figma</a>
            <a className="ui label">Sketch</a>
          </div>

          <h4>Motion Design Software</h4>
          <div className="ui gray labels">
            <a className="ui label">Adobe After Effects</a>
            <a className="ui label">Adobe Animate</a>
          </div>

          <h4>3D Modeling Software</h4>
          <div className="ui gray labels">
            <a className="ui label">Autodesk Maya</a>
            <a className="ui label">Blender 3D</a>
          </div>

          <h4>Project Management Software</h4>
          <div className="ui gray labels">
            <a className="ui label">Agile Methodologies</a>
            <a className="ui label">Basecamp</a>
            <a className="ui label">Slack</a>
          </div>

          <h4>Miscellaneous</h4>
          <div className="ui gray labels">
            <a className="ui label">Visual Studio Code</a>
            <a className="ui label">Git</a>
            <a className="ui label">NPM</a>
          </div>


        </div>



        
        {/* <Link href="/listings">
          <a>See Listings</a>
        </Link> */}

        
            
        <div className={styles.footerblockout}></div> 
        
      </div>
      
      
      

      

      

      
      
      </div>
    </>
    
  )
}
