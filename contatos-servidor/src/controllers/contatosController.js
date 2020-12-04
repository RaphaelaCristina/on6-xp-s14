const { response, request } = require('express')
const contatosCollection = require('../models/contatosSchema')

//GET INDEX
const getAll = (request, response) => {
    console.log(request.url)

    contatosCollection.find((error,contatos) => {
        if(error){
          return  response.status(500).send(error)
        }else {
            return response.status(200).send({
                menssagem: "Tudo certo",
                contatos
            })
        }
    })
}

//GET CONTATOS
const getContatos = (request, response) =>{ 
    console.log(request.url);

    contatosCollection.find((error, contatos)=>{
        if(error){
            return response.send(500).send(error)
        } else {
            return response.status(200).json(contatos)
        }
    })
}

//POST
const addContato = (request, response) => {
    const contatoDoBody = request.body //pegando contato do Body
    const contato = new contatosCollection(contatoDoBody) //criando um novo dado

    contato.save((error)=>{
        if(error){
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                menssagem: "POST realizado com sucesso",
                contato
            })
        }
    })
}


//GET NOME
const getNome = (request, response) => {
    const nomeParams = request.params.nome

    contatosCollection.find({nome: nomeParams}, (error, contato)=>{
        if(error){
           return response.status(500).send(error)
        } else {
            if (contato == ""){
                return response.status(404).send({
                    menssagem: "Nome não encontrado!"
                })
            } else {
                return response.status(200).send({
                    menssagem: "GET realizado com sucesso",
                    contato
                })
            }
        }

        
    })

}


//GET ID
const getById = (request, response) => {
    idParam = request.params.id
    contatosCollection.findById(idParam,(error, contato)=>{
        if(error){
            return response.status(500).send(error)
        }else {
            if(contato ==""){
                return response.status(404).send({
                    menssagem: "ID não encontrado!"
                })
            } else {
                return response.status(200).send({
                    menssagem: "GET realizado com sucesso",
                    contato})
            }
        }
    })
}


//DELETAR POR ID
const deleteID = (request, response) => {
    idParam = request.params.id
    contatosCollection.findByIdAndDelete(idParam, (error,contato)=>{
        if(error){
            return response.status(500).send(error)
        } else {
            if(contato){
                return response.status(200).send("Contato deletado com sucesso!")
            } else {
                return response.statusSend(404)
            }
        }
    })
}

//PUT - atualizar tudo
const atualizaTudo = (request, response) => {
   const idParam = request.params.id
   const atualizacao = request.body
   const novo = {new: true}
    contatosCollection.findByIdAndUpdate(idParam, atualizacao, novo, (error, contato)=>{
        if(error){
            response.status(500).send(error)
        }else {
            if(contato ==""){
                return response.status(404).send({
                    menssagem: "ID não encontrado!"
                })
            } else {
                return response.status(200).send({
                    menssagem: "Contato atualizado com sucesso!",
                    contato
                })
            }
        }
    })
}

//PATCH atualiza telefone
const atualizaTel = (request, response) => {
    const idParam = request.params.id
    const telAtualizado = request.body
    const novo = {new: true}
    contatosCollection.findByIdAndUpdate(idParam, telAtualizado, novo, (error, contato)=>{
        if(error){
            response.status(500).send(error)
        }else {
            if(contato ==""){
                return response.status(404).send({
                    menssagem: "ID não encontrado!"
                })
            } else {
                return response.status(200).send({
                    menssagem: "Telefone atualizado com sucesso!",
                    contato
                })
            }
        }
    })
}
module.exports = {
    getAll,
    getContatos,
    getById,
    getNome,
    deleteID,
    addContato,
    atualizaTudo,
    atualizaTel
    
}
