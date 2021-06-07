const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DBNAME, 
                                process.env.DBUSER,
                                process.env.DBPASSWORD,
                                 {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false
    
});
module.exports=sequelize;