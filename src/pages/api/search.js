import axios from "axios"

export default async function handler(req, res) {
    const { q, order_by, sort_by } = req.query
    const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${q}&order_by=${order_by}`)
    res.json(response.data)
}
