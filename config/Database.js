import { Sequelize } from "sequelize";

const sequelize = new Sequelize('santri_madin', 'root','admin',{
    host: 'localhost',
    dialect:'mysql'
})

export default sequelize;
