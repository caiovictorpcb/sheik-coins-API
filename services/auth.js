import jwt from 'jsonwebtoken'


class Token{

    gerarToken(data){
        return jwt.sign(data, 'xesquedele')
    }


    verificarToken(token){
        try {
            var decoded = jwt.verify(token, 'xesquedele');
            return decoded
        }catch(err) {
            return false
    }
    }
}




export default new Token();