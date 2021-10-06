import MoedaDao from '../models/moeda'
import User from '../models/users'
import MoedasUsuario from '../models/posses';


export default function listarMoedasTop(){
    return MoedaDao.listarMoedasTop()
} 

// LOGIN


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
export async function newPosse(moedaId, userId){
    const posse = await findPosse(moedaId, userId)
    if(posse){
        return false
    }
    else{
        return MoedasUsuario.create({moedaId, userId})
    }
}

export function findPosse(moedaId, userId){
    return MoedasUsuario.findOne({
        where:{
            moedaId,
            userId
        }
    })
}


export async function deletePosse(moedaId, userId){
    const posse = await findPosse(moedaId, userId)
    if(posse){
        return await posse.destroy()
}
    else{
        return false
    }
}

export function listarPosses(id){
    return MoedasUsuario.findAll({
        where:{
            userId:id
        }
    })
}