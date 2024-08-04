const mongoose =  require("mongoose");

async function main(){

    try {
        await mongoose.connect(
            "mongodb+srv://marcio:admin123@cluster0.5igypuf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Conectado ao Banco MongoDB");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;