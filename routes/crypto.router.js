import express from "express";
import listarMoedasTop from '../services/DbService'



const router = express.Router();


router.get('/', async (req, res) => {
    const moedasTop = await listarMoedasTop()
    return res.send(moedasTop)
  })


export default router;