import Image from "next/image"
import MovieList from "./Movie-List"

const Movies = ({ movies, loading }) => {
    if (loading) {
        return(
            <>
                <div className="flex items-center justify-center">
                    <Image src='/gif/loading.gif' alt='loading gif' height={200} width={500}></Image>
                </div>
            </>
        )
    }
    if (!movies || movies.length === 0) {
        return(
            <>
                <div className="flex items-center justify-center">
                <p className="text-xl sm:text-2xl">No Movies Found</p>
                    {/* <Image className="-p-t=10" src='/gif/crash.gif' alt='loading gif' height={600} width={800}></Image> */}
                </div>
            </>
        )
    }

    return (
        <>
        <MovieList movies={movies} />      
        </>
    )
}

export default Movies