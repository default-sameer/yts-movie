import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const MovieList = ({movies}) => {
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
                                    {movie.title_long}
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

export default MovieList