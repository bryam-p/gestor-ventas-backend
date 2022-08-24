import { getConnection, sql } from '../database/connection'
import { queriesBankAccount} from '../database/querys'

export const getAllBankAccount = async (req, res) => {
    console.log(getConnection)
    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request().query(queriesBankAccount.getAll) //Solicitud a la BD con query
        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}

export const getBankAccountById = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request()
            .input("id", id)
            .query(queriesBankAccount.getById) //Solicitud a la BD con query

        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}





