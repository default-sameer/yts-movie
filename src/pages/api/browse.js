import axios from "axios"

export default async function handler(req, res) {
    const { q, } = req.query
    const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?order_by=desc&limit=20&sort_by=download_count`)
    res.json(response.data)
}
