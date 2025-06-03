import { pool } from "../db.js"

export const getUsersModel = async()=>{
    const { rows } = await pool.query('SELECT * FROM users')
    return rows
}

export const getUserModel = async (id)=>{
    const  { rows } = await pool.query('SELECT * FROM users WHERE id_user = $1', [id])
    return rows[0]
}

export const createUserModel = async (first_name, last_name, email, password, phone, fk_id_role, status)=>{
    const {rows} = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone, fk_id_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status])
    return rows
}

export const deleteUserModel =  async (id)=>{
    const {rowCount} = await pool.query('DELETE FROM users WHERE id_user = $1',[id])
    return rowCount
}

export const editUserModel = async(first_name, last_name, email, password, phone, fk_id_role, status, id)=>{
    const {rows} = await pool.query('UPDATE users SET first_name=$1, last_name=$2, email=$3, password=$4, phone=$5, fk_id_role=$6, status=$7 WHERE id_user = $8 RETURNING *',[first_name, last_name, email, password, phone, fk_id_role, status, id])
    return rows[0]
}
