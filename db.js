import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('postgres://silhizlerpssad:5774fd57c2c11aee98cd3bde5ac5a32db2ff397e00103183060cff435aeea5b7@ec2-3-225-204-194.compute-1.amazonaws.com:5432/da61rf8qigl8p0', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}) 


export default sequelize;