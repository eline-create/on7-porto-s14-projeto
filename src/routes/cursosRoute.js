const express = require("express")
const router = express.Router()
const controller = require("../controllers/cursosController")

router.get("/", controller.getAll) //ok
router.get("/turno", controller.getPorTurno) // desafio
router.get("/bootcamps", controller.getBootcamps) //ok
router.get("/:id", controller.getById) //ok
router.get("/:estado/gratuitos", controller.getCursosGratuitos) //desafio
router.get("/:estado/pagos", controller.getCursosPagos) //desafio
router.post("/", controller.postCurso) // ok
router.delete("/turno", controller.deleteCursosPorTurno) // desafio
router.delete("/:id", controller.deleteCurso)
router.put("/:id", controller.putCurso)


module.exports = router