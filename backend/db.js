const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'testing',
    'root',
    'ANSKk08aPEDbFjDO',
    {
        dialect: "mysql",
        host: 'localhost',
        port: 3307
    }
);

const connectToDb = async ()=> {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to our db");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {sequelize, connectToDb}