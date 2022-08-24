import { getConnection, sql } from '../database/connection'
import { queriesClient} from '../database/querys'

export const getAllClient = async (req, res) => {
    console.log(getConnection)
    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request().query(queriesClient.getAll) //Solicitud a la BD con query
        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}

export const getClientById = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request()
            .input("id", id)
            .query(queriesClient.getById) //Solicitud a la BD con query

        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}





