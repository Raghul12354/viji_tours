// import pg from "pg"

// const db = new pg.Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'vijitour',
//     password: process.env.dbpass,
//     port: 5432
// })

// db.connect();

// export const postData = async (item: any) => {
//     try {
//         const { title, description, location } = item;
//         const query = `
//             INSERT INTO tours (title, description,location)
//             VALUES ($1, $2, $3,)`;
//         const values = [title, description, location];
//         await db.query(query, values);
//         console.log('Data inserted successfully.');
//     } catch (error) {
//         console.error('Error inserting data:', error);
//     }
// };
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vijitour',
    password: process.env.dbpass,
    port: 5432,
});

export default pool;
