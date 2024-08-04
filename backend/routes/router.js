const router = require("express").Router();

//Routers de Destinos
const destinosRouter = require("./destinos");
router.use("/", destinosRouter);

//Routers de Atrativos 
const atrativosRouter =  require("./atrativos");
router.use("/", atrativosRouter);

module.exports = router;