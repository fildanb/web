'use strict';



module.exports = function (sequelize, DataTypes) {
  return sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    year: DataTypes.INTEGER,
  }, {
    underscored: true
  });

};