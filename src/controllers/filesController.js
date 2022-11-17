import { getConnection, sql } from '../database/connection'
import { queriesFile } from '../database/querys'


export const createNewFile = async (req, res) => { //POST
    try {
        console.log(req.body)

        const { name, type, size, id_sale } = req.body

        const pool = await getConnection(); //Esperando a la BD
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('type', sql.VarChar, type)
            .input('size', sql.BigInt, size)
            .input('id_sale', sql.Int, id_sale)
            .query(queriesFile.createNew)
        res.status(200).send('Archivo creado')
    } catch (err) {
        console.log(err)
    }
}