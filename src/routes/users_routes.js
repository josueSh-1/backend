import { Router } from "express";
const router = Router()

router.get('/users', (req,res)=>{
    res.send('Obteniendo usuarios')
})

router.get('/users/:id', (req,res)=>{
    const {id} = req.params
    res.send('Obteniendo usuario '+id)
})

router.post('/users', (req,res)=>{
    res.send('Creando usuario')
})

router.delete('/users/:id', (req,res)=>{
    res.send('Eliminando usuario ')
})

router.put('/users/:id', (req,res)=>{
    res.send('Actulizando usuario ')
})

export default router;