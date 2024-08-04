const router = require("express").Router();
const destinoController = require("../controllers/destinoController");

//ROTAS
router
    .route("/destinos")
    .post((req, res) => destinoController.save(req, res));

router
    .route("/destinos")
    .get((req, res) => destinoController.getAll(req, res)); 

router
    .route("/destinos/:id")
    .get((req, res) => destinoController.get(req, res));

router
    .route("/destinos/:id")
    .delete((req, res) => destinoController.delete(req, res));


router
    .route("/destinos/:id")
    .put((req, res) => destinoController.update(req, res));


module.exports = router;