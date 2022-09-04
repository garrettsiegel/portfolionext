import Link from "next/link";

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { listings: data }
    }
}

const Listings = ({ listings }) => {
    
    return ( 
        <div>
            <h1>Listings</h1>
            {listings.map(listing => (
                <Link key={listing.id} href={'/listings/' + listing.id}>
                    <a>
                        <h3>{listing.name}</h3>
                    </a>
                </Link>
            ))}
            
        </div>
     );
}
 
export default Listings;