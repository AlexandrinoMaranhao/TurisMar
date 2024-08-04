const router = require("express").Router();
const atrativoController =  require("../controllers/atrativoController");

//ROTAS
router
    .route("/atrativos")
    .post((req, res) => atrativoController.save(req, res));

router
    .route("/atrativos")
    .get((req, res) => atrativoController.getAll(req, res)); 

router
    .route("/atrativos/:id")
    .get((req, res) => atrativoController.get(req, res));

router
    .route("/atrativos/:id")
    .delete((req, res) => atrativoController.delete(req, res));


router
    .route("/atrativos/:id")
    .put((req, res) => atrativoController.update(req, res));


module.exports = router;