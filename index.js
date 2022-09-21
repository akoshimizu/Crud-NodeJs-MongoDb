const app =  require('express')();
const bodyParser = require('body-parser');
const data = require('./data/database');

const porta = 3000;
const rotaUsuario = require('./src/routes/usuarios');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(rotaUsuario);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});
