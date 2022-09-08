import Link from "next/link";
import Image from "next/image";
import styles from '/components/Navbar.module.css'

export default function Navbar() {
    return ( 
        <nav>
            <div className={styles.navcontainer}>
                
                <div className={styles.navleft}>
                    <Link href="/"><a>
                        <Image className={styles.navimage} src={"/garrett-siegel.jpg"} width={40} height={40} alt={''} layout="fixed"></Image>
                    </a></Link>
                    <Link href="/"><a>
                        <h3>Garrett Siegel <span>| Front End Developer</span></h3>
                    </a></Link>
                </div>
                <div className={styles.navright}>
                    <Link href="/"><a className={styles.navlink}>Home</a></Link>
                    <Link href="/work"><a className={styles.navlink}>WebDev Work</a></Link>
                    {/* <Link href="/"><a><button className={styles.navbutton}>Log In</button></a></Link> */}
                </div>       
            </div>
        </nav>
             
     );
}
 
