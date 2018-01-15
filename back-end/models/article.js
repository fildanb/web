'use strict';



module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        date: DataTypes.DATE,
        year:DataTypes.INTEGER
    }, {
        underscored: true
    });

};