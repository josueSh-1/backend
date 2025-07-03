import { pool } from "../db.js"

export const getDonationsModel = async()=>{
    const {rows} = await pool.query('SELECT * FROM donation')
    return rows
}

export const getDonationModel = async(id) =>{
    const {rows} = await pool.query('SELECT * FROM donation WHERE id_donation=$1',[id])
    return rows[0]
}

export const createDonationModel =async(amount, donation_date, fk_id_user)=>{
    const {rows} = await pool.query('INSERT INTO donation (amount, donation_date, fk_id_user) VALUES ($1, $2, $3) RETURNING *', [amount, donation_date, fk_id_user])
    return rows
}

export const donationDetailed = async () => {
    const { rows } = await pool.query('SELECT donation.amount,donation.donation_date,donation.fk_id_user,users.first_name,users.last_name,users.email FROM donation JOIN users ON donation.fk_id_user = users.id_user');
    return rows;
}