import pg from 'pg'

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '2004',
    database: 'Bd_Geriatric',
    port: '5432',
    client_encoding: 'utf8'
})
