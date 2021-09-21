import sequelize from "../db";
import { Sequelize } from "sequelize";
import bcrypt from 'bcrypt'
import MoedasUsuario from './moedas'

const DataTypes = Sequelize.DataTypes;

const User = sequelize.define('User', {
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    hooks: {
     beforeCreate: async (user) => {
      if (user.senha) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       user.senha = bcrypt.hashSync(user.senha, salt);
      }
     },
     beforeUpdate:async (user) => {
      if (user.senha) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       user.senha = bcrypt.hashSync(user.senha, salt);
      }
     }
    },
    instanceMethods: {
     validPassword: (senha) => {
      return bcrypt.compareSync(senha, this.senha);
     }
    }
   });
   User.prototype.validPassword = async (senha, hash) => {
    return await bcrypt.compareSync(senha, hash);
   };
   User.hasMany(MoedasUsuario, { as: 'Moedas', foreignKey: 'userId' })



export default User;