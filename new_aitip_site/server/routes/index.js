const Router = require("express")
const router = new Router()
const userRouter = require("./userRouter")
const staffRouter = require("./staffRouter")


router.use('/user', userRouter)
router.use("/staff", staffRouter)


module.exports = router