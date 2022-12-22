// Модели таблиц с информацией, связанной с поступлением. Поля, их типы данных и свойства

const sequelize = require("../db")
const {DataTypes} = require("sequelize")


const DirectionBachelor = sequelize.define("direction_bachelor", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    code: {type: DataTypes.STRING, unique: true, allowNull: false},
    profile: {type: DataTypes.TEXT, allowNull: false},
    profession_advantages: {type: DataTypes.TEXT, allowNull: false},
    profession_description: {type: DataTypes.TEXT, allowNull: false},
    specialities: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    extramural_form_price: {type: DataTypes.INTEGER, allowNull: false},
    full_and_part_time_form_price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})


const EntranceTests = sequelize.define("entrance_tests", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    subject: {type: DataTypes.STRING, allowNull: false},
    min_points: {type: DataTypes.INTEGER, allowNull: false},
    isNecessary: {type: DataTypes.BOOLEAN}
})

//RELATION

DirectionBachelor.hasMany(EntranceTests,{as: "tests"})
EntranceTests.belongsTo(DirectionBachelor)

module.exports = {DirectionBachelor, EntranceTests}

/*
const Device = sequelize.define("device", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        price: {type: DataTypes.INTEGER, allowNull: false},
        rating: {type: DataTypes.INTEGER, defaultValue: 0},
        img: {type: DataTypes.STRING, allowNull: false},
    }
)

const DeviceInfo = sequelize.define("device_info", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.STRING, allowNull: false}
    }
)

const Type = sequelize.define("type", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false}
    }
)

const Brand = sequelize.define("brand", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false}
    }
)

const Rating = sequelize.define("rating", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        rate: {type: DataTypes.INTEGER, allowNull: false}
    }
)

const TypeBrand = sequelize.define("type_brand", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    }
)

// RELATION

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

BasketDevice.hasOne(Basket)
Basket.belongsTo(BasketDevice)

Device.hasMany(DeviceInfo, {as: "info"})
DeviceInfo.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

// EXPORT

module.exports = {
    User, Basket, BasketDevice, Device, DeviceInfo, Type, Brand, Rating, TypeBrand
}
*/