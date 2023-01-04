const Router = require("express")
const router = new Router()
const staffRouter = require("./staffRouter")
const direction_bachelor = require("./directionBachelorRouter")


router.use("/staff", staffRouter)
router.use("/direction_bachelor", direction_bachelor)



module.exports = router