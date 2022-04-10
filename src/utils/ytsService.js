import { axiosGetCancellable } from "./axios.helpers"

function searchMovies(searchText) {
    return axiosGetCancellable(`/api/search?q=${searchText}&order_by=asc`)
}

export { searchMovies }