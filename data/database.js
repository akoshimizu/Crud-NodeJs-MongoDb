const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/usuarios", () => {
    console.log("Mongo conectado na porta 27017")
});