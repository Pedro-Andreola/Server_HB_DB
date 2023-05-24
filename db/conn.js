const { error } = require('console')
const {Sequelize} = require ('sequelize')
const sequelize = new Sequelize('banco_d', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Conexão Supimpa meu Chegado')
}).catch((error)=>{
    console.log('Não rolou meu camarada ' + error)
})

module.exports = sequelize