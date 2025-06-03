import { pool } from "../db.js"

export const getDonationsModel = async()=>{
    const {rows} = await pool.query('SELECT * FROM donation')
    return rows
}

export const getDonationModel = async(id) =>{
    const {rows} = await pool.query('SELECT * FROM donation WHERE id_donation=$1',[id])
    return rows[0]
}

export const createDonationModel =async(donor_name, amount, donation_date, email, phone, fk_id_user)=>{
    const {rows} = await pool.query('INSERT INTO donation (donor_name, amount, donation_date, email, phone, fk_id_user) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [donor_name, amount, donation_date, email, phone, fk_id_user])
    return rows
}