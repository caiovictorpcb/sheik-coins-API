import express from "express";
import { newPosse, getUserById, listarPosses, deletePosse } from "../services/DbService.js";
import TokenService from '../services/TokenService.js'
const router = express.Router();



router.post('/', async (req, res)=>{
    try{
        await newPosse(req.body.moedaId, req.body.userId)
        res.send('POSSE CADASTRADA')
    }
    catch(error){
        res.send(error.parent.detail)
}})

router.post('/delete', async (req, res)=>{
        const deleted = await deletePosse(req.body.moedaId, req.body.userId)
        if(deleted){
        res.send('POSSE DELETADA')
    }
    else{
        res.send(`POSSE NAO EXISTENTE NO USUÁRIO`)
    }
    }
)

router.get('/:id', async(req, res)=>{
    const user = await getUserById(req.params.id) 
    const verify = TokenService.verificarToken(req.headers.authorization)
    if(verify && user){
        const posses = await listarPosses(user.id)
        res.send(posses)
}
    else{
        res.send("USUÁRIO NÃO CADASTRADO OU NÃO AUTORIZADO")
}
})


    export default router;