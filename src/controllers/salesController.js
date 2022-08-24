import { getConnection, sql } from '../database/connection'
import { queriesSale } from '../database/querys'

export const getAllSale = async (req, res) => {
    console.log(getConnection)
    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request().query(queriesSale.getAll) //Solicitud a la BD con query
        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}

export const getSaleById = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request()
            .input("id", id)
            .query(queriesSale.getById) //Solicitud a la BD con query

        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}





