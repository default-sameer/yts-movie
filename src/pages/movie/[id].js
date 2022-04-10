import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const Movie = ({data}) => {

  const router = useRouter()

  const back = () => {
    router.back()
  }
  return (
    <>
        
      <div className='flex justify-center items-center flex-col container'>
        <h1 className='text-center pb-5'>{data.title}</h1>
        <button className='btn btn-outline mb-4' onClick={back}>Back</button>
        <Image className='object object-fill m-5' src={`${data.large_cover_image}`} height={800} width={600} alt={`${data.title} `} />
        <div className='flex flex-row justify-center p-3'>
          {data.torrents.map(torrent => 
            
            <button key={torrent.quality} className="btn btn-outline btn-success m-2">
            <Link href={`${torrent.url}`}>
            <a>
            {torrent.quality}<span>{torrent.type}</span>
            </a>
            </Link>
            </button>
          )}
        </div>
        {/* <div className="divider"></div> */}
        <p className='p-10 m-2'>{data.description_full}</p>
        
      </div>
      
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