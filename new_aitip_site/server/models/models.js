const sequelize = require("../db")
const {DataTypes} = require("sequelize")


const Staffer = sequelize.define("staffer", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        post: {type: DataTypes.STRING, allowNull: false},
        academic_degree: {type: DataTypes.STRING, allowNull: false},
        // photo: {type: DataTypes.STRING, allowNull: false},
        // subjects: {type: DataTypes.STRING, allowNull: false},
        // add_prof_edu: {type: DataTypes.STRING, allowNull: false, defaultValue: "-"},
        // education_level: {type: DataTypes.STRING, allowNull: false, defaultValue: "Высшее образование специалитет"},
        // academic_title: {type: DataTypes.STRING, allowNull: false, defaultValue: "доцент"},
        // training_direction_or_specialty: {type: DataTypes.STRING, allowNull: false},
        // qualification: {type: DataTypes.STRING, allowNull: false},
        // advanced_training_or_retraining: {type: DataTypes.STRING, allowNull: false},
        // total_work_experience: {type: DataTypes.INTEGER, allowNull: false},
        // specialty_experience: {type: DataTypes.INTEGER, allowNull: false},
        // bio: {type: DataTypes.STRING, allowNull: false},
        // publications: {type: DataTypes.STRING, allowNull: false},
        // teaching: {type: DataTypes.STRING, allowNull: false},
        // projects: {type: DataTypes.STRING, allowNull: false}
    }
)


module.exports = {Staffer}