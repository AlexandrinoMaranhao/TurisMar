const mongoose =  require("mongoose");

async function verifyDestino() {
    const destinos = await Destino.find();
    console.log(destinos);  // Check existing Destino documents
}

const destinoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    localizacao: {
        latitude:{ type: String, required: true },
        longitude:{ type: String, required: true }
    },
    imagem: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
}, {versionKey: false});

module.exports = mongoose.model('Destino', destinoSchema);