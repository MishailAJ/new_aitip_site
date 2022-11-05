// Относительные ссылки в серверных запросах, связанных с БД. Работающие благодаря функциям staffController


const Router = require("express")
const router = new Router()
const staffController = require("../controllers/staffController")

router.post("/", staffController.create)
router.get("/", staffController.getAll)
router.get("/:id", staffController.getOne)


module.exports = router