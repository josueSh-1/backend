import { pool } from "../db.js"
export const getResidentModel = async(id)=>{
    const {rows} = await pool.query('SELECT * FROM residents WHERE id = $1', [id])
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
    const {rows} = await pool.query('UPDAT residents SET first_name=$1, last_name=$2, birthdate=$3, admission_date=$4, bio=$5 WHERE id_resident=$6 RETURNING *',[first_name, last_name, birthdate, admission_date, bio, id])
    return rows[0]
}