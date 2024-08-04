const Atrativo = require("../models/Atrativo");
const Destino = require("../models/Destino");
const mongoose = require("mongoose");

const atrativoController = {
    save: async (req, res) =>{
        try {
            const { nome, tipo, sobre, localizacao, dicas, imagem, destino } = req.body;
            const { latitude, longitude } = localizacao || {};

            if (!mongoose.Types.ObjectId.isValid(req.body.destino)) {
                return res.status(406).json({ msg: "ID de Destino Inválido ou Não-Existente"});
            }
            const destinoExists = await Destino.findById(destino);
            if (!destinoExists) {
                return res.status(404).json({ msg: "Destino não encontrado" });
            }

            const atrativo = new Atrativo({
                nome: req.body.nome,
                tipo: req.body.tipo,
                sobre: req.body.sobre,
                localizacao: {
                    latitude, 
                    longitude
                },
                dicas: req.body.dicas,
                imagem: req.body.imagem,
                destino: req.body.destino
            });

            const novoAtrativo = await atrativo.save();
            res.status(201).json({novoAtrativo});

        } catch (error) {
            console.log(error);
        }
    },

    getAll: async(req, res) =>{
        try {
            const atrativos = await Atrativo.find();

            res.json(atrativos);
        } catch (error) {
            console.log(error);
        }
    },

    get: async(req, res) =>{
        try {
            const id = req.params.id;

            const atrativo = await Atrativo.findById(id);

            if(!atrativo){
                res.status(404).json({msg: "Atrativo não encontrado"});
                return;
            }

            res.status(200).json(atrativo);

        } catch (error) {
            console.log(error);
        }
    },

    delete: async(req, res) =>{
        try {
            const id = req.params.id;
            const atrativo = await Atrativo.findById(id);

            if(!atrativo){
                res.status(404).json({msg: "Atrativo não encontrado"})
            }

            const atrativoApagado =  await Atrativo.findByIdAndDelete(id);
            res.status(200).json({atrativoApagado, msg: "Atrativo excluído com sucesso"});
        } catch (error) {
            console.log(error);
        }
    },

    update: async(req, res) =>{
        try {
            const id =  req.params.id;

            const atrativo = ({
                nome: req.body.nome,
                tipo: req.body.tipo,
                sobre: req.body.sobre,
                localizacao: {
                    latitude: req.body.localizacao?.latitude,  
                    longitude: req.body.localizacao?.longitude
                },
                dicas: req.body.dicas,
                imagem: req.body.imagem,
                destino: req.body.destino
            });

            const atrativoAtualizado =  await Atrativo.findByIdAndUpdate(id, atrativo);
            if(!atrativoAtualizado){
                res.status(404).json({msg: "Atrativo não encontrado ou ID inválido"});
                return;
            }

            res.status(200).json({atrativoAtualizado, msg:"Atrativo atualizado com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    }
};

//CRUD Atrativos OK - SO FAR
//Criar um atrativo OK
//Obter todos os atrativos disponíveis OK
//Obter atrativo por ID OK
//Deletar atrativo OK
//Atualizar atrativo OK 

module.exports = atrativoController;