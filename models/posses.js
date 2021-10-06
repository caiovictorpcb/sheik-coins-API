import sequelize from "../db";
import { Sequelize } from 'sequelize'


const DataTypes = Sequelize.DataTypes;

const MoedasUsuario = sequelize.define('Moeda', {
    moedaId:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

})

export default MoedasUsuario;