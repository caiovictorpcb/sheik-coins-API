import express from 'express'
import { listarPosses, deleteUser, listarMoedasTop, listUsers, Login, newUser, newPosse } from '../services/index'
import Token from '../services/auth'
import { getUserById } from './../services/index';
import verifyToken from './middlewares/authmiddleware';

var router = express.Router()


router.get('/', (req, res, next) => {
  res.send("XESQUEDELE")
});


router.get('/crypto', async (req, res) => {
  const moedasTop = await listarMoedasTop()
  res.send(moedasTop)
})

// C
router.post('/users', async (req, res) => {
  await newUser(req.body)
  res.send('CADASTRADO')
})

// R
router.get('/users', async (req,res) =>{
  const users = await listUsers()
  res.send(users) 
})

// U


// D

router.get('/users/:id', async(req, res) =>{
  await deleteUser(req.params.id)
})

// LOGIN 
router.post('/login', async (req, res) => {
  const email = req.body.email
  const senha = req.body.senha
  if(email === undefined || senha === undefined){
    res.send("error")
  }
  else{
    const response = await Login(req.body.email, req.body.senha)
    res.send(response)
  }

  
})

// CRUD POSSES PORTFOLIO
router.post('/portfolio', async (req, res)=>{
  try{
    await newPosse(req.body.moedaId, req.body.userId)
    res.send('POSSE CADASTRADA')
  }
  catch(error){
    res.send(error.parent.detail)
  }
})
  

router.get('/teste', async(req, res)=>{
  //const posses = await listarPosses()
  //res.send(posses)
})

router.get('/portfolio/:id', async(req, res)=>{
  const user = await getUserById(req.params.id) 
  const verify = Token.verificarToken(req.headers.authorization)
  if(verify && user && user?.id === verify?.id){
      const posses = await listarPosses(user.id)
      res.send(posses)
  }
  else{
    res.send("USUÁRIO NÃO CADASTRADO OU NÃO AUTORIZADO")
  }
})


export default router;
