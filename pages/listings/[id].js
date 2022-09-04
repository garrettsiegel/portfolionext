export const getStaticPaths = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map(listing => {
        return {
            params: { id: listing.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    return {
        props: { listing: data }
    }
}

const Details = ({ listing }) => {
    return ( 
        <div>
            <h1>{ listing.name }</h1>
            <p>{ listing.email }</p>
            <p>{ listing.website }</p>

            <p>{ listing.address.city }</p>

        </div>
     );
}
 
export default Details;