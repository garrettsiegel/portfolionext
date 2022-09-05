import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="nav-container">
            
            <div className="ui inverted segment">
                <div className="nav-flex">

                    <div className="nav-title">
                        <div className="ui horizontal list">
                            <div className="item">
                                <Image className="ui mini circular image" src={"/garrett-siegel.jpg"} width={200} height={200} alt={''}/>
                                <div className="content">
                                    <span className="navspan">Garrett Siegel </span> <span className="navspan2">| Front End Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui inverted secondary menu">
                        <Link href="/"><a className="active item">Home</a></Link>
                        <Link href="/"><a className="item">Work</a></Link>
                        <Link href="/"><a className="item">Case Studies</a></Link>
                        <Link href="/"><a>
                            <button className="ui orange button">
                                Log In
                            </button>
                        </a></Link>
                    </div>
                    
                </div>
            </div>
            
        </div>    
     );
}
 
export default Navbar;