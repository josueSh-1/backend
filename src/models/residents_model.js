import { pool } from "../db.js"

export const getResidentsModel= async()=>{
    const { rows } = await pool.query('SELECT * FROM residents')
    return rows
}

export const getResidentModel = async(id)=>{
    const {rows} = await pool.query('SELECT * FROM residents WHERE id_resident = $1', [id])
    return rows[0]
}

export const createResidentModel = async(first_name, last_name, birthdate, admission_date, bio, photo)=>{
    const {rows} = await pool.query('INSERT INTO residents (first_name, last_name, birthdate, admission_date, bio, photo) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *', [first_name, last_name, birthdate, admission_date, bio,photo])
    return rows
}

export const deleteResidentModel =async(id)=>{
    const {rowCount}=await pool.query('DELETE FROM residents WHERE id_resident=$1',[id])
    return rowCount
}

export const editResidentModel=async(data,id)=>{
    const keys = Object.keys(data)
    const values = Object.values(data)
    if(keys.length===0){
        return null
    }
    const setQuery = keys.map((key,idx)=> `${key}=$${idx+1}`).join(', ')
    const {rows} = await pool.query(`UPDATE residents SET ${setQuery} WHERE id_resident = $${keys.length + 1} RETURNING *`,[...values, id])
    return rows[0]
}