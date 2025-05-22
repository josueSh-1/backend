import { pool } from "../db.js"

export const getUsers =  async (req,res)=>{
    const { rows } = await pool.query('SELECT * FROM users')
    res.json(rows)
}

export const getUser = async (req,res)=>{
    const {id} = req.params
    const  { rows } = await pool.query('SELECT * FROM users WHERE id_user = $1', [id])
    if(rows.length  === 0){
        return res.status(404).json({message:"User not Found"})
    }
    res.json(rows[0])
}

export const createUser =  async(req,res)=>{
    const { first_name, last_name, email, password, phone, fk_id_role, status }  = req.body
    const {rows} = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone, fk_id_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status])
    return res.json(rows[0])
}

export const deleteUser =  async(req,res)=>{
    const { first_name, last_name, email, password, phone, fk_id_role, status }  = req.body
    const {rows} = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone, fk_id_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status])
    return res.json(rows[0])
}

export const editUser =  async(req,res)=>{
    const { first_name, last_name, email, password, phone, fk_id_role, status }  = req.body
    const {rows} = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone, fk_id_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status])
    return res.json(rows[0])
}