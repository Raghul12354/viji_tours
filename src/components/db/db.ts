import pg from 'pg'

const db = new pg.Client({
    user: process.env.userdb,
    host: "localhost",
    database: process.env.database,
    password: process.env.dbpass,
    port: 5432
})
db.connect();

export default db;