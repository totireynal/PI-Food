const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      //imagen default
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    healthScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        max: 100,
        min: 0
      }
    },

    steps: {
      type: DataTypes.TEXT,
      allowNull: false
    
    },
    
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false
  });
};
