import { getConnection, sql } from '../database/connection'
import { queriesArticle } from '../database/querys'

export const getAllArticle = async (req, res) => {
    console.log(getConnection)
    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request().query(queriesArticle.getAll) //Solicitud a la BD con query
        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}

export const getArticleById = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request()
            .input("id", id)
            .query(queriesArticle.getById) //Solicitud a la BD con query

        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}





