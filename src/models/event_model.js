import { pool } from "../db.js"

export const getEventsModel= async()=>{
    const { rows } = await pool.query('SELECT * FROM event')
    return rows
}

export const getEventModel = async(id)=>{
    const {rows} = await pool.query('SELECT * FROM event WHERE id_event = $1', [id])
    return rows[0]
}

export const createEventModel = async(title, description)=>{
    const {rows} = await pool.query('INSERT INTO event (title, description) VALUES ($1, $2) RETURNING *', [title, description])
    return rows
}

export const deleteEventModel =async(id)=>{
    const {rowCount}=await pool.query('DELETE FROM event WHERE id_event=$1',[id])
    return rowCount
}

export const editEventModel=async(data,id)=>{
    const keys = Object.keys(data)
    const values = Object.values(data)
    if(keys.length===0){
        return null
    }
    const setQuery = keys.map((key,idx)=> `${key}=$${idx+1}`).join(', ')
    const {rows} = await pool.query(`UPDATE event SET ${setQuery} WHERE id_event = $${keys.length + 1} RETURNING *`,[...values, id])
    return rows[0]
}