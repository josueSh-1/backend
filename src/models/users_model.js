import { pool } from "../db.js"

export const getUserModel = async (id)=>{
    const  { rows } = await pool.query('SELECT * FROM users WHERE id_user = $1', [id])
    return rows[0]
}

export const createUserModel = async (first_name, last_name, email, password, phone, fk_id_role, status)=>{
    const {rows} = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone, fk_id_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status])
    return rows
}

export const deleteUserModel =  async ()=>{
    const {rowCount} = await pool.query('DELETE FROM users WHERE id_user = $1',[id])
    return rowCount
}

export const editUserModel = async(first_name, last_name, email, password, phone, fk_id_role, status, id)=>{
    const {rows} = await pool.query('UPDATE users SET first_name=$1, last_name=$2, email=$3, password=$4, phone=$5, fk_id_role=$6, status=$7 WHERE id_user = $8 RETURNING *',[first_name, last_name, email, password, phone, fk_id_role, status, id])
    return rows[0]
}

export const getResidentModel = async(id)=>{
    const {rows} = await pool.query('SELECT * FROM residents WHERE id_resident = $1', [id])
    return rows[0]
}

export const createResidentModel = async(first_name, last_name, birthdate, admission_date, bio)=>{
    const {rows} = await pool.query('INSERT INTO residents (first_name, last_name, birthdate, admission_date, bio) VALUES ($1, $2, $3, $4, $5) RETURNING *', [first_name, last_name, birthdate, admission_date, bio])
    return rows
}

export const deleteResidentModel =async(id)=>{
    const {rowCount}=await pool.query('DELETE FROM residents WHERE id_resident=$1',[id])
    return rowCount
}

export const editResidentModel=async(first_name, last_name, birthdate, admission_date, bio, id)=>{
    const {rows} = await pool.query('UPDATE residents SET first_name=$1, last_name=$2, birthdate=$3, admission_date=$4, bio=$5 WHERE id_resident=$6 RETURNING *',[first_name, last_name, birthdate, admission_date, bio, id])
    return rows[0]
}