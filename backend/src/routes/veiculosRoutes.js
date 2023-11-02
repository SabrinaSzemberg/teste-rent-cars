const express = require('express');
const router = express.Router();
const Veiculos = require('../models/veiculosModel');

router.get('/veiculos', async(req, res) => {
    const veiculos = await Veiculos.findAll();

    res.status(200).json(veiculos);
});


router.get('/veiculos/:id', async(req, res) => {
    const veiculo = await Veiculos.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json(veiculo);
});

router.post('/veiculos', async (req, res) => {
    const {locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado, createdAt} = req.body;

    const newVeiculos = Veiculos.build({
        'locadora':locadora,
        'modelo':modelo,
        'marca':marca,
        'ano':ano,
        'motor':motor,
        'portas':portas,
        'cambio':cambio,
        'ar_condicionado':ar_condicionado,
        'createdAt':createdAt
    })

    try {
        await newVeiculos.save()

        res.status(201).json();
    } catch (error) {
        res.json(error)
    }
});

router.put('/veiculos/:id', async (req, res) => {
    const veiculo = await Veiculos.findOne({
        where: {
            id:req.params.id
        }
    })

    const {locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado, createdAt, updatedAt} = req.body;

    await veiculo.update(
        {
        'locadora':locadora,
        'modelo':modelo,
        'marca':marca,
        'ano':ano,
        'motor':motor,
        'portas':portas,
        'cambio':cambio,
        'ar_condicionado':ar_condicionado,
        'createdAt':createdAt,
        'updatedAt':updatedAt
        }
    )

    await veiculo.save();

    res.status(200).json(veiculo)
});

router.delete('/veiculos/:id', async (req, res) => {
    const veiculo = await Veiculos.findOne({
        where: {
            id:req.params.id
        }
    })
    await veiculo.destroy();

    res.status(204).json({});
});

module.exports = router;