import styles from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {
    return ( 
        <div className={styles.footermain}>

            <div className={styles.footercontainer}>
                <div className={styles.footerleft}>
                    <Link href="mailto:garrett@submurgedcreative.com"><a><i className="envelope open icon"></i> Email</a></Link>
                    <Link href="https://calendly.com/garrettsiegel/phonecall" ><a target={"_blank"}><i className="calendar alternate outline icon"></i> Book A Calendly Meeting</a></Link>
                </div>
                <div className={styles.footerright}>
                    <Link href="https://www.linkedin.com/in/garrettsiegel/"><a target={"_blank"}><i className="linkedin in icon"></i></a></Link>
                    <Link href="https://github.com/garrettsiegel/"><a target={"_blank"}><i className="github icon"></i></a></Link>
                    <p>2022 - Garrett Siegel</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer;