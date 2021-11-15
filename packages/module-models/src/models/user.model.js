const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const database = require('../services/database.service');

const User = database.define(
  'users',
  {
    userId: {
      field: 'id',
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userName: {
      type: DataTypes.STRING,
      field: 'username',
      allowNull: false,
      unique: true,
    },
    password: {
      field: 'password',
      type: DataTypes.STRING,
      allowNull: true,
    },
    highestScore: {
      field: 'highest_score',
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt); // eslint-disable-line no-param-reassign
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt); // eslint-disable-line no-param-reassign
        }
      },
    },
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      },
    },
  }
);
User.prototype.validPassword = async (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = User;
