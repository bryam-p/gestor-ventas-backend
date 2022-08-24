import { getConnection } from "../database/connection";
import { queriesContractor } from "../database/querys";

export const getAllUsers = async (req, res)=>{
    console.log(getConnection)
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesContractor.getAll)
        const {recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err);
    }
}

