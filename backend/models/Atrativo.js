const mongoose =  require("mongoose");

const atrativoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    sobre: { type: String, required: true },
    localizacao: {
        latitude:{ type: String, required: true },
        longitude:{ type: String, required: true }
    },
    dicas: { type: String, required: true },
    imagem: { type: String, required: true },
    destino: { type: mongoose.SchemaTypes.ObjectId, ref: 'Destino', required: true },
    slug: { type: String, required: true, unique: true }
}, {versionKey: false});

module.exports = mongoose.model('Atrativo', atrativoSchema);