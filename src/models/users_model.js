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

export const editUserModel = async(data, id)=>{
    const keys = Object.keys(data)
    const values = Object.values(data)
    if(keys.length===0){
        return null
    }
    const setQuery = keys.map((key,idx)=>`${key} = $${idx+1}`).join(', ')
    const {rows} = await pool.query(`UPDATE users SET ${setQuery} WHERE id_user = $${keys.length + 1} RETURNING *`, [...values, id])
    return rows[0]
}

export const getEmailUserModel = async (email) =>{
    const {rows} = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    return rows[0]
}