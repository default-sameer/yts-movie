import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

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
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap justify-center">
                {movies.map(movie => {
                    return <div key={movie.id} className="rounded overflow-hidden shadow-lg mb-5 md:w-1/2 m-5 lg:w-1/4 bg-blue-100">
                    <div>
                        <Link href='/movie/[id]' as={`/movie/${movie.id}`} passHref>
                        <motion.div layoutId={movie.id} animate={{ scale: 1 }} whileHover={{ scale: 0.90}} transition={{ ease: "easeOut", duration: 0.5 }}>
                            <Image class="w-full object-cover cursor-pointer" src={`${movie.large_cover_image}`} alt={`${movie.title}`} height={1200} width={800}/>
                        </motion.div>
                        </Link>
                    </div>
                            <div className="px-6 py-4 text-center">
                            <motion.div className="font-bold text-xl mb-2">
                                <Link href='/movie/[id]' as={`/movie/${movie.id}`} passHref>
                                <a>
                                    {movie.title}
                                </a>
                                </Link>
                                </motion.div>
                            </div>
                            <div className="px-3 pb-2">
                            {movie.genres.map(genre => 
                                <span key={genre} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-xl">{genre}</span>
                            )}
                                
                            </div>
                    </div>
                })}
                </div>
            </div>
        </section>       
        </>
    )
}

export default Movies