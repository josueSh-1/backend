import { tr } from "zod/v4/locales";
import { getDonationsModel,getDonationModel,createDonationModel, donationDetailed } from "../models/donations_model.js"
import { createError, errors } from '../utils/error.js';

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
            throw createError(errors.donationNotFound);
        }
        return res.json(rows[0])
    }catch(error){
        next(error)
    }
}

export const createDonation = async(req,res,next)=>{
    try{
        const {amount, donation_date, fk_id_user}=req.body
        const rows =  await createDonationModel(amount, donation_date,fk_id_user)
        return res.json(rows)
    }catch(error){
        console.log('error',error)
        next(error)
    }
}

export const donationDetailedCtr = async(req,res,next)=>{
    try{
        const rows = await donationDetailed()
        return res.json(rows)
    }catch(error){
        next(error)
    }
}