import express from "express";
import { listUsers, newUser, deleteUser } from './../services/DbService';
import AuthService from "../services/AuthService";

const router = express.Router();



router.post('/signup', async (req, res) => {
    await newUser(req.body)
    res.send("CADASTRADO")
})
  

router.get('/users', async (req,res) =>{
    const users = await listUsers()
    res.send(users) 
})

  
router.get('/users/:id', async(req, res) =>{
    await deleteUser(req.params.id)
})

router.post('/login', async (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    if(email === undefined || senha === undefined){
      res.send("error") 
    }
    else{
      const response = await AuthService.loginUser(req.body.email, req.body.senha)
      res.send(response)
    }
  
    
})

  export default router;