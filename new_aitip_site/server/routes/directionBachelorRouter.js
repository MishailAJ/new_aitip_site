// Относительные ссылки в серверных запросах, связанных с БД. Работающие благодаря функциям directionBachelorController

const Router = require("express")
const router = new Router()
const directionBachelorController = require("../controllers/directionBachelorController")

router.post("/", directionBachelorController.create)
router.get("/", directionBachelorController.getAll)
router.get("/:name", directionBachelorController.getOne)

module.exports = router