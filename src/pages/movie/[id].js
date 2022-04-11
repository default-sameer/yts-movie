import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Movie = ({data}) => {

  const router = useRouter()

  const back = () => {
    router.back()
  }
  return (
    <>
        {/* <button className='btn btn-outline mb-4' onClick={back}>Back</button> */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <motion.div layoutId={data.id} animate={{ scale: 1 }}>
            <Image alt={`${data.title} `} className="lg:w-1/2 w-full lg:h-auto h-64 object-contain sm:object-cover object-center rounded" src={`${data.large_cover_image}`} height={700} width={500}/>
            </motion.div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title_long}</h1>
                <p className="leading-relaxed"><span className='text-xl text-blue-500'>Description: </span>{data.description_full}</p>
              <div className='divider'>Available Downloads</div>
              <div className="container text-center min-w-full">
                {data.torrents.map(torrent =>

                  <button key={torrent.quality} className="btn btn-outline btn-primary m-2">
                    <Link href={`${torrent.url}`}>
                      <a>
                        {torrent.quality}<span>{torrent.type}</span>
                      </a>
                    </Link>
                  </button>
                )}
               
               
              </div>
              </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${context.query.id}`)
  const {movie} = res.data.data
  return{
    props: {
      data: movie
    }
  }
}

export default Movie