// Относительные ссылки в серверных запросах, связанных с БД. Работающие благодаря функциям userController. Скорее всего не будет использоваться.


const Router = require("express")
const router = new Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/registration", userController.registration)
router.post("/login", userController.login)
router.get("/auth", authMiddleware, userController.check)



module.exports = router