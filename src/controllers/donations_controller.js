import { getDonationsModel,getDonationModel,createDonationModel } from "../models/donations_model.js"

export const getDonations=async(req,res)=>{
    try{
        const rows =  await getDonationsModel()
        return res.json(rows)
    }catch(error){
        console.log(error)
        return res.status(500).json({message:'Error getting Donations'})
    }
}

export const getDonation = async(req,res)=>{
    try{
        const {id}=req.params
        const rows =  await getDonationModel(id)
        if(!rows){
            return res.status(404).json({message: 'Donation not found'})
        }
        return res.json(rows[0])
    }catch(error){
        console.log(error)
        return res.statu(500).json({message:'Error getting Donations'})
    }
}

export const createDonation = async(req,res)=>{
    try{
        const {donor_name, amount, donation_date, email, phone, fk_id_user}=req.body
        const rows =  await createDonationModel(donor_name, amount, donation_date, email, phone, fk_id_user)
        return res.json(rows)
    }catch(error){
        console.log(error)
        return res.statu(500).json({message:'Error getting Donations'})
    }
}