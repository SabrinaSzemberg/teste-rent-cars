const { sequelize } = require('../../db')
const { DataTypes } = require('sequelize');

const Veiculos = sequelize.define('Veiculos', {
        id: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        locadora:{
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        marca:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ano:{
            type: DataTypes.DATE,
            allowNull: false
        },
        motor:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        portas:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cambio:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ar_condicionado:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.DATE
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false
        }
    
})

sequelize.sync()
module.exports = Veiculos