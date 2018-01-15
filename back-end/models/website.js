'use strict';



module.exports = function (sequelize, DataTypes) {
    return sequelize.define('website', {
        title: DataTypes.STRING,
        owner: DataTypes.STRING,
        url: DataTypes.STRING,
        date: DataTypes.DATE,
    }, {
        underscored: true
    });

};