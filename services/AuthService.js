import User from "../models/users"
import Response from "./ResponseSchema"
import TokenService from "./TokenService"
import bcrypt from 'bcrypt'



class AuthService {

    loginUser = async (email, senha) =>  {
            const user = await User.findOne({
                where:{
                    email
                }
            })
        if(user){
            const success = bcrypt.compareSync(senha, user.senha)
            if(success){
                const token = TokenService.gerarToken(user.toJSON())
                return Response.success({ token:token , user:{id:user.id, nome:user.nome, email:user.email}})
            }
        }
        return Response.error('EMAIL/SENHA INCORRETOS')
            
        }
    
}
export default new AuthService();