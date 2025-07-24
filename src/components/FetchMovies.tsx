export default async function fetchMovies (setStated: any, typeCat?: string) {
    try {
        let response;
        typeCat ? response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${typeCat}`) : response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);

        console.log({response})

        const data = await response.json();
        setStated(data);
    } catch (err) {
        console.error("Error fetching movies:", err);
    }
}