const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:deadend12345@localhost:3306/hewan');

module.exports = {
    sequelize,
    Hewan: require('./Hewan')(sequelize)
}
