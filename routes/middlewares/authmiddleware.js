import Token from '../../services/TokenService'


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization
    const decoded = Token.verificarToken(token)
    if(decoded){
        req.user = decoded
        next()
    }
    else{
        res.send("DEU RUIM!")
}
}

export default verifyToken;