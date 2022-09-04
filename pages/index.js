import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Garrett | Home</title>
        {/* <meta name="keywords" content="Design" /> */}
      </Head>
      <div>
      
      <h1 className={styles.title}>Homepage</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nostrum sed alias repellendus minima ut magni temporibus blanditiis a ducimus magnam doloribus tempore animi itaque dolore id, est harum incidunt.</p>

      <Image src="/OrlandoPenny1PhoneAd.jpg" width={1080} height={1350} layout={"intrinsic"} alt={'Air Penny Phone Ad'}/>

      <Link href="/listings">
        <a>See Listings</a>
      </Link>
      
      </div>
    </>
    
  )
}
