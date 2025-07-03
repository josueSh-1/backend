import { pool } from "../db.js"

export const getEventLogsModel = async ()=>{
    const {rows} = await pool.query('SELECT * FROM event_log')
    return rows
}

export const createEventLogModel = async(date,start_time,end_time,fk_user,fk_id_event)=>{
    const {rows} = await pool.query('INSERT INTO event_log (date, start_time, end_time, fk_user, fk_id_event) VALUES ($1,$2,$3,$4,$5) RETURNING *',[date,start_time,end_time,fk_user,fk_id_event])
    return rows
}

export const eventLogFULLDATAModel = async () => {
    const { rows } = await pool.query('SELECT event_log.*, event.*, users.first_name, users.last_name FROM event_log JOIN event ON event_log.fk_id_event = event.id_event JOIN users ON event_log.fk_user = users.id_user');
    return rows;
};