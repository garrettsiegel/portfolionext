import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return ( 
        <div className={styles.footermain}>

            <div className={styles.footercontainer}>
                <div className={styles.footerleft}>

                    <Link href="mailto:garrett@submurgedcreative.com"><a>
                    <div className={styles.footerleftflex}>
                        <Image src="/mail-icon.svg" width={35} height={35} layout={"intrinsic"} alt={''}/>
                        <span>Email</span>
                    </div>
                    </a></Link>

                    {/* <Link href="https://calendly.com/garrettsiegel/phonecall" ><a target={"_blank"}>
                    <div className={styles.footerleftflex}>
                    <Image src="/calendar-icon.svg" width={35} height={35} layout={"intrinsic"} alt={''}/>
                    <span>Book A Calendly Meeting</span>
                    </div>
                    </a></Link> */}
                </div>
                <div className={styles.footerright}>
                    <Link href="https://github.com/garrettsiegel/"><a target={"_blank"}>
                        <Image src="/github-icon.svg" className={styles.avatar} width={35} height={35} layout={"intrinsic"} alt={''}/>
                    </a></Link>

                    <Link href="https://www.linkedin.com/in/garrettsiegel/"><a target={"_blank"}>
                        <Image src="/linkedin-icon.svg" className={styles.avatar} width={35} height={35} layout={"intrinsic"} alt={''}/>
                    </a></Link>
                    
                    <Link href="https://www.upwork.com/freelancers/garrettsubmurged"><a target={"_blank"}>
                        <Image src="/upwork-icon.svg" className={styles.avatar} width={35} height={35} layout={"intrinsic"} alt={''}/>
                    </a></Link>
                    <p>2022 - Garrett Siegel</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer;