const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contatosSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        required: true,
        auto: true
    },

    nome: {
        type: String,
        required: true,
        
    },

    celular: {
        type: String,
        required: true,
        
    },

    dataNascimento: {
        type: Date,
        required: true,
       
    },

    fotoPerfil: {
        type: String,
        required: false,
        
    }

},
{
    collection: "contatos",
    versionKey: false
   
  })


const contatosCollection = mongoose.model('contatos', contatosSchema)

module.exports = contatosCollection
