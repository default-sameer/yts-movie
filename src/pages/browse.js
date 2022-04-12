import axios from 'axios'
import MovieList from '../components/Movie-List'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FcPrevious, FcNext } from 'react-icons/fc'

const Browse = ({movies, page, count}) => {
  const router = useRouter()

  const lastPage = Math.ceil(count / 3)
  return (
    <>
         <NextSeo title="Browse Movies | Movie Box"  description="Download and Watch Movies"/>
        <h1 className='text-2xl text-center p-3'>Browse Movies</h1>
        <div className='flex justify-center items-center p-5'>
          <div className="btn-group">
            <button className="btn bg-white" onClick={() => router.push(`/browse?page=${page - 1}`)} disabled={page <= 1}><FcPrevious /></button>
            <button className="btn">Page {page}</button>
            <button className="btn bg-white" onClick={() => router.push(`/browse?page=${page + 1}`)} disabled={page >= lastPage}><FcNext /></button>
          </div>
        </div>
        <MovieList movies={movies} />
        <div className='flex justify-center items-center p-5'>
          <div className="btn-group">
            <button className="btn bg-white" onClick={() => router.push(`/browse?page=${page - 1}`)} disabled={page <= 1}><FcPrevious /></button>
            <button className="btn">Page {page}</button>
            <button className="btn bg-white" onClick={() => router.push(`/browse?page=${page + 1}`)} disabled={page >= lastPage}><FcNext /></button>
          </div>
        </div>
    </>
  )
}

export async function getServerSideProps({query: {page = 1}}) {

  const pages = +page
  const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?order_by=desc&limit=12&sort_by=download_count&page=${pages}`);
  const {movies} = res.data.data;
  const {movie_count} = res.data.data;
  return {
    props: {
      movies,
      page: +page,
      count: movie_count
    },
  };
}

export default Browse