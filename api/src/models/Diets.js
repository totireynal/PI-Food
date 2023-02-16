const { DataTypes, UUIDV4} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Diets', {
        id: { // si no quiero el UUID, no pongo esto y por default me va a poner un ID
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        timestamps: false
    })
}