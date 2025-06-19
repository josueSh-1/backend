import { getDonationsModel,getDonationModel,createDonationModel } from "../models/donations_model.js"

export const getDonations=async(req,res,next)=>{
    try{
        const rows =  await getDonationsModel()
        return res.json(rows)
    }catch(error){
        next(error)
    }
}

export const getDonation = async(req,res,next)=>{
    try{
        const {id}=req.params
        const rows =  await getDonationModel(id)
        if(!rows){
            const error = new Error('Donation not found')
            error.status = 404
            throw error
        }
        return res.json(rows[0])
    }catch(error){
        next(error)
    }
}

export const createDonation = async(req,res,next)=>{
    try{
        const {donor_name, amount, donation_date, email, phone, fk_id_user}=req.body
        const rows =  await createDonationModel(donor_name, amount, donation_date, email, phone, fk_id_user)
        return res.json(rows)
    }catch(error){
        next(error)
    }
}