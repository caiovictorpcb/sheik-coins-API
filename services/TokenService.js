import jwt from 'jsonwebtoken'


class TokenService{

    gerarToken(data){
        return jwt.sign(data, 'xesquedele')
    }


    verificarToken(token){
        try {
            const decoded = jwt.verify(token, 'xesquedele');
            return decoded
        }catch(err) {
            return false
    }
    }
}




export default new TokenService();