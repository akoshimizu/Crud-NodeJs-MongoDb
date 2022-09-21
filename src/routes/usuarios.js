const express = require('express');
const bodyParser = require('body-parser')

const router = express.Router();
const userSchema = require('../models/users');


router.get('/usuarios', (req, res) => {
    userSchema.find({}).then(function(usuarios) {
        res.send(usuarios);
    })
});

router.post('/usuarios', (req, res) => {
    const usuario = userSchema(req.body);
    usuario
        .save()
        .then((usuario) => res.send(usuario)
    )
})


router.put('/usuarios/:id', (req, res) => {

    const id = req.params.id;
    userSchema.findByIdAndUpdate(id, { $set:
        { nome : req.body.nome },
          idade : req.body.idade,
    })
    .exec();
   
    res.send()
})


router.delete('/usuarios/:id', (req, res) => {
    // const id = req.params.id;
    userSchema.findByIdAndRemove(req.params.id)
        .exec();
    res.send('Ok')
});

module.exports =  router;