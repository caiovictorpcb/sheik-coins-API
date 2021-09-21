import MoedaDao from '../models/moeda'
import User from '../models/users'
import bcrypt from 'bcrypt'
import Response from './res'
import Token  from './auth';
import MoedasUsuario from '../models/moedas';


export function listarMoedasTop(){
    return MoedaDao.listarMoedasTop()
} 

// LOGIN
export async function Login(email, senha){
    const user = await User.findOne({
        where:{
            email
        }
    })
    if(user){
        const success = bcrypt.compareSync(senha, user.senha)
        if(success){
            const token = Token.gerarToken(user.toJSON())
            return Response.success({ token:token , user:{id:user.id, nome:user.nome, email:user.email}})
        }
    }
    return Response.error('EMAIL/SENHA INCORRETOS')
    
}

// C
export function newUser(usuario){
    return User.create(usuario)
}
// R
export function listUsers(){
    return User.findAll()
}
// U
export function updateUser(id, dado){
    return User.update()
} 
// D
export function deleteUser(id){
    return User.destroy({
        where:{
            id:id
        }
    })
}

export function getUserById(id){
    return User.findOne({
        where:{
            id
        }
    })
}

// CRUD POSSES PORTFOLIO
export function newPosse(moedaId, userId){
    return MoedasUsuario.create({moedaId, userId})
}

export function listarPosses(id){
    return MoedasUsuario.findAll({
        where:{
            userId:id
        }
    })
}