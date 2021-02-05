'use sctrict'
const { DataTypes } = require('sequelize')

const setupDatabase = require('../lib/db')

module.exports = function setupUserModel(config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('users', {
    uuid: {
      type: DataTypes.UUIDV4,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    geolocation: {
      type: DataTypes.GEOGRAPHY('POINT'),
      allowNull: true,
    },
  })
}
