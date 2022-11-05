/* Функции создания и получения данных между сервером и БД. Ссылки, по которым они работают написаны в staffRouter
*/

const uuid = require("uuid")
const path = require("path")
const {Staffer} = require("../models/models")
const ApiError = require("../error/ApiError")
const { Op } = require('sequelize')


class StaffController {
    async create(req, res, next) {
        try{
            let {name, post, academic_degree,
                // subjects, add_prof_edu, education_level, academic_degree, academic_title, training_direction_or_specialty, qualification, advanced_training_or_retraining, total_work_experience, specialty_experience, bio, publications, teaching, projects
            } = req.body
            // const {img} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // await img.mv(path.resolve(__dirname, "..", "static", fileName))
            const staff = await Staffer.create({name, post, academic_degree,
                // subjects, add_prof_edu, education_level, academic_title, training_direction_or_specialty, qualification,advanced_training_or_retraining, total_work_experience, specialty_experience, bio, publications, teaching, projects,
                // img: fileName
            })

            return res.json(staff)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        let {post, academic_degree, letter, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = limit * (page - 1)
        let staff;

        if (!post && !academic_degree && !letter) {
            staff = await Staffer.findAndCountAll({limit, offset})
            console.log("staffController, f getAll noParams")
        }
        if (!post && !academic_degree && letter) {
            staff = await Staffer.findAndCountAll({where: {name: {
                [Op.like]: `${letter}%`
            }}, limit, offset})
        }
        if (!post && academic_degree && !letter) {
            staff = await Staffer.findAndCountAll({where: {academic_degree}, limit, offset})
        }
        if (post && !academic_degree && !letter) {
            staff = await Staffer.findAndCountAll({where: {post}, limit, offset})
        }
        if (!post && academic_degree && letter) {
            staff = await Staffer.findAndCountAll({where: {name: {
                        [Op.like]: `${letter}%`
                    }, academic_degree}, limit, offset})
        }
        if (post && !academic_degree && letter) {
            staff = await Staffer.findAndCountAll({where: {name: {
                        [Op.like]: `${letter}%`
                    }, post}, limit, offset})
        }
        if (post && academic_degree && !letter) {
            staff = await Staffer.findAndCountAll({where: {post, academic_degree}, limit, offset})
        }
        if (post && academic_degree && letter) {
            staff = await Staffer.findAndCountAll({where: {name: {
                        [Op.like]: `${letter}%`
                    }, academic_degree, post}, limit, offset})
        }
        return res.json(staff)
    }

    async getOne(req, res) {
        const {id} = req.params
        const staffer = await Staffer.findOne({
            where: {id},
        })
        return res.json(staffer)
    }
}

module.exports = new StaffController