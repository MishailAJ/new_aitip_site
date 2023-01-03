/* Функции создания и получения данных между сервером и БД. Ссылки, по которым они работают написаны в staffRouter
*/

const uuid = require("uuid")
const path = require("path")
const {Staffer} = require("../models/staffModels")
const ApiError = require("../error/ApiError")
const { Op } = require('sequelize')


class StaffController {
    async create(req, res, next) {
        try{
            let {name, post, academic_degree, directions_bac, programs_add, education_level, academic_title, bio_text, publications_text, disciplines_and_courses_text, projects_text, email, phone_number, adress} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, "..", "static", fileName))

            const staff = await Staffer.create({name, post, academic_degree, directions_bac, programs_add, education_level, academic_title, bio_text, publications_text, disciplines_and_courses_text, projects_text, email, phone_number, adress, img: fileName})
            return res.json(staff)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        let {subjects_bac, subjects_add, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = limit * (page - 1)
        let staff;

        if (!subjects_bac && !subjects_add) {
            staff = await Staffer.findAndCountAll({limit, offset, order: [
                ['name']]})
            console.log("staffController, f getAll noParams")
        }
        if (!subjects_bac && subjects_add) {
            staff = await Staffer.findAndCountAll({limit, offset, order: [
                    ['name']], where: {subjects_add: {[Op.contains]: subjects_add}}})
        }
        if (!subjects_bac && subjects_add) {
            staff = await Staffer.findAndCountAll({limit, offset, order: [
                    ['name']], where: {subjects_bac: {[Op.contains]: subjects_bac}}})
        }
        if (subjects_bac && subjects_add) {
            staff = await Staffer.findAndCountAll({limit, offset, order: [
                    ['name']], where: {[Op.and]: [{subjects_bac: {[Op.contains]: subjects_bac}}, {subjects_add: {[Op.contains]: subjects_add}}]}})
        }
        // if (!post && !academic_degree && letter) {
        //     staff = await Staffer.findAndCountAll({where: {name: {
        //         [Op.like]: `${letter}%`
        //     }}, limit, offset, order: [['name']]})
        // }
        // if (!post && academic_degree && !letter) {
        //     staff = await Staffer.findAndCountAll({where: {academic_degree}, limit, offset, order: [['name']]})
        // }
        // if (post && !academic_degree && !letter) {
        //     staff = await Staffer.findAndCountAll({where: {post}, limit, offset, order: [['name']]})
        // }
        // if (!post && academic_degree && letter) {
        //     staff = await Staffer.findAndCountAll({where: {name: {
        //                 [Op.like]: `${letter}%`
        //             }, academic_degree}, limit, offset, order: [['name']]})
        // }
        // if (post && !academic_degree && letter) {
        //     staff = await Staffer.findAndCountAll({where: {name: {
        //                 [Op.like]: `${letter}%`
        //             }, post}, limit, offset, order: [['name']]})
        // }
        // if (post && academic_degree && !letter) {
        //     staff = await Staffer.findAndCountAll({where: {post, academic_degree}, limit, offset, order: [['name']]})
        // }
        // if (post && academic_degree && letter) {
        //     staff = await Staffer.findAndCountAll({where: {name: {
        //                 [Op.like]: `${letter}%`
        //             }, academic_degree, post}, limit, offset, order: [['name']]})
        // }
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