const mongoose =  require("mongoose");
const Destino = require("../models/Destino");

const destinoController = {
    save: async (req, res) => {
        try {
            const destino = new Destino({
                nome: req.body.nome,
                descricao: req.body.descricao,
                localizacao: {
                    latitude: req.body.localizacao.latitude,
                    longitude: req.body.localizacao.longitude
                },
                imagem: req.body.imagem,
                slug: req.body.slug
            });

            const novoDestino = await destino.save();
            res.status(201).json({novoDestino, msg: "Destino criado com sucesso"});  
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async(req, res) =>{
        try {
            const destinos = await Destino.find();
            
            res.json(destinos);
        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id =  req.params.id;
            const destino = await Destino.findById(id);
            
            if(!destino){
                res.status(404).json({msg: "Destino não encontrado"});
                return;
            }
            res.json(destino);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id =  req.params.id;
            const destino = await Destino.findById(id);

            if(!destino){
                res.status(404).json({msg: "Destino não encontrado para excluir"});
            }

            const deletedDestino = await Destino.findByIdAndDelete(id);
            res.status(200).json({deletedDestino, msg: "Destino excluído com sucesso"});
        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const destino = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                localizacao: {
                    latitude: req.body.localizacao.latitude,
                    longitude: req.body.localizacao.longitude
                },
                imagem: req.body.imagem,
                slug: req.body.slug
            };

            const destinoAtualizado =  await Destino.findByIdAndUpdate(id, destino);
            if(!destinoAtualizado){
                res.status(404).json({msg: "Destino não encontrado para atualizar"});
            }

            res.status(200).json({destino, msg: "Destino atualizado com sucesso"});
        } catch (error) {
            console.log(error);
        }
    }
};

//CRUD de Destinos OK - SO FAR
//Criar um destino  OK
//Obter todos os destinos disponíveis OK
//Obter destino por ID OK
//Deletar destino OK
//Atualizar destino OK

module.exports = destinoController;