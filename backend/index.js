const express = require('express');
const apiRoutes = require('./src/routes/veiculosRoutes');
const cors = require('cors');
const {sequelize, connectToDb} = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', apiRoutes);
app.use(cors())

app.use((req, res) => {
    res.status(404);
    res.json({messagem:"Resource not found"})
});

app.use((req, res) => {
    res.status(500);
    res.json({messagem:"Oops... Something went wrong"})
});

app.get('/', (req, res) => {
    res.status(200).json({message:"Rota get Ok"})
});

app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
})