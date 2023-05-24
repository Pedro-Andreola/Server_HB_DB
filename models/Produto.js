const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    nome:{
        type:DataTypes.STRING(30)
    },
    qtde:{
        type:DataTypes.INTEGER
    },
    preco:{
        type:DataTypes.FLOAT
    }
},{
    createdAt:false,
    updatedAt:false 
})

// Produto.sync({force:true})

module.exports = Produto