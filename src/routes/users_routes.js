import { Router } from "express";
import { pool } from '../db.js'

const router = Router()

router.get('/users', async (req,res)=>{
    const { rows } = await pool.query('SELECT * FROM users')
    res.json(rows)
})

router.get('/users/:id', async (req,res)=>{
    const {id} = req.params
    const  { rows } = await pool.query('SELECT * FROM users WHERE id_user = $1', [id])
    if(rows.length  === 0){
        return res.status(404).json({message:"User not Found"})
    }
    res.json(rows[0])
})

router.post('/users', async(req,res)=>{
    const { first_name, last_name, email, password, phone, fk_id_role, status }  = req.body
    const {rows} = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone, fk_id_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status])
    return res.json(rows[0])
})

router.delete('/users/:id', async(req,res)=>{
    const {id} = req.params
    const {rowCount} = await pool.query('DELETE FROM users WHERE id_user = $1 RETURNING *', [id])
    if(rowCount.length  === 0){
        return res.status(404).json({message:"User not Found"})
    }
    return res.sendStatus(204)
})

router.put('/users/:id', async(req,res)=>{
    const {id}= req.params
    const { first_name, last_name, email, password, phone, fk_id_role, status }  = req.body
    const {rows} = await pool.query('UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, phone = $5, fk_id_role = $6, status = $7 WHERE id_user = $8 RETURNING *', [first_name, last_name, email, password, phone, fk_id_role, status, id])
    return res.json(rows[0])
})

export default router;