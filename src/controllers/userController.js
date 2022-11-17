import { getConnection, sql } from '../database/connection'
import { queriesUser } from '../database/querys'

export const getAllUsers = async (req, res) => {
    console.log(getConnection)
    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request().query(queriesUser.getAll) //Solicitud a la BD con query
        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}

export const getUserById = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection(); //Esperando a la BD
        const result = await pool.request()
            .input("id", id)
            .query(queriesUser.getById) //Solicitud a la BD con query

        const { recordset } = result;
        res.send(recordset)
    } catch (err) {
        console.log(err)
    }
}

export const createNewUser = async (req, res) => { //POST
    try {
        console.log(req.body)

        const { name, last_name, rol, state, email, password } = req.body

        const pool = await getConnection(); //Esperando a la BD
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('last_name', sql.VarChar, last_name)
            .input('rol', sql.VarChar, rol)
            .input('state', sql.Bit, state)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query(queriesUser.createNew)
        res.status(200).send('Usuario creado')
    } catch (err) {
        console.log(err)
    }
}

export const updateUser = async (req, res) => {
    const { name, last_name, email, rol } = req.body
    const { id } = req.params

    const pool = await getConnection();
    await pool.request()
        .input("id", id)
        .input('name', sql.VarChar, name)
        .input('last_name', sql.VarChar, last_name)
        .input('email', sql.VarChar, email)
        .input('rol', sql.VarChar, rol)
        .query(queriesUser.updateById)
    res.status(200).send('Usuario actualizado')
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection();
    await pool.request()
        .input("id", id)
        .query(queriesUser.delete)
    res.status(200).send('Usuario eliminado')
}

