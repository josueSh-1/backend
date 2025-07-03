import { createEventLogModel, eventLogFULLDATAModel, getEventLogsModel } from "../models/eventlog_model.js"

export const getEventLogs = async(req,res,next)=>{
    try{
        const rows = await getEventLogsModel()
        res.json(rows)
    }catch(error){
        next(error)
    }
}

export const createEventLog = async(req,res,next)=>{
    try{
        const { date,start_time, end_time, fk_user, fk_id_event } = req.body
        const rows =  await createEventLogModel(date,start_time,end_time,fk_user,fk_id_event)
        res.status(201).json(rows[0])
    }catch(error){
        next(error)
    }
}

export const eventLogFullDataController = async (req, res, next) => {
    try {
        const rows = await eventLogFULLDATAModel();
        res.json(rows);
    } catch (error) {
        next(error);
    }
}