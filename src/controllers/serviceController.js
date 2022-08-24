import { getConnection } from "../database/connection";
import { queriesService } from "../database/querys";

export const getAllService = async (req, res)=>{
    console.log(getConnection)
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesService.getAll)
        const {recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err);
    }
}

export const getServiceById = async (req, res) =>{
    const { id } = req.params

    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request()
            .input("id", id)
            .query(queriesService.getById) //Solicitud a la BD con query

        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}