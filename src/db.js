import pg from 'pg'
import { Db_DataBase, Db_Host, Db_Password, Db_Port, Db_User } from './config.js'

export const pool = new pg.Pool({
    user: Db_User,
    host: Db_Host,
    password: Db_Password,
    database: Db_DataBase,
    port: Db_Port,
    client_encoding: 'utf8'
})
