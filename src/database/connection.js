import sql from 'mssql';

const dbSettings = {
    user: process.env.USER,
    password: process.env.PASS,
    server: "localhost",
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

sql.connect(dbSettings)

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }
}

export { sql }





