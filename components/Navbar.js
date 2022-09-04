import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1 className="title">Title</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/listings"><a>Listings</a></Link>
        </nav>
     );
}
 
export default Navbar;