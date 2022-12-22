/* Функции создания и получения данных между сервером и БД. Ссылки, по которым они работают написаны в directionBachelorRouter
*/

const uuid = require("uuid")
const path = require("path")
const ApiError = require("../error/ApiError")
const {DirectionBachelor, EntranceTests} = require("../models/admissionModels");


class DirectionBachelorController {
    async create(req, res, next) {
        try{
            let {name, code, profile, profession_advantages, profession_description,
                specialities, extramural_form_price, full_and_part_time_form_price, tests} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, "..", "static", fileName))
            console.log(specialities)

            const directionBachelor = await DirectionBachelor.create({name, code, profile, profession_advantages, profession_description, specialities, extramural_form_price, full_and_part_time_form_price, img: fileName
            })

            if (tests) {
                tests = JSON.parse(tests)
                tests.forEach(i =>
                    EntranceTests.create({
                        subject: i.subject,
                        min_points: i.min_points,
                        isNecessary: i.isNecessary,
                        directionBacheloreId: directionBachelor.id
                    })
                )
            }

            return res.json(directionBachelor)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = limit * (page - 1)

        let directionBachelor = await DirectionBachelor.findAndCountAll({limit, offset})
        return res.json(directionBachelor)
    }

    async getOne(req, res) {
        const {name} = req.params
        const direction = await DirectionBachelor.findOne({
            where: {name},
        })
        return res.json(direction)
    }
}

module.exports = new DirectionBachelorController