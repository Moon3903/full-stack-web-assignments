const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Hewan extends Model {}

    Hewan.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        namaSpesies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        umur: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'hewan'
    });

    return Hewan;
}