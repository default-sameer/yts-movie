import Search from "../components/search";
import { useState } from "react";
import axios from "axios";
import Movies from "../components/Movie";
import { searchMovies } from "../utils/ytsService";
import ScrollToTop from "react-scroll-to-top";


export default function Home({data}) {

  const [searchText, setSearchText] = useState('move')
  const [movies, setMovies] = useState(data)
  const [loading, setLoading] = useState(false)

  const onSearchTextChange = (text) => {
    setSearchText(text)
    if (text) {
      loadMovies(text)
    }
  }

  const loadMovies = async (searchText) => {
    setLoading(true)
    const res = await searchMovies(searchText)
    if (res && res.data) {
      setLoading(false)
      setMovies(res.data.data.movies)
    }
  }
  return (
    <> 
      <ScrollToTop smooth color="#6f00ff" />
      <Search searchText={searchText} onSearchTextChange={onSearchTextChange} />
      
      <Movies loading={loading} movies={movies} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50&order_by=desc&sort_by=download_count&genre=Action&minimum_rating=8");
  const {movies} = res.data.data;
  return {
    props: {
      data: movies
    },
  };
}
