'use strict';
let sequelize = require('../conf/db');

let Book = sequelize.import('./book');
let Article = sequelize.import('./article');
let Website = sequelize.import('./website');







module.exports ={
  Book,
  Article,
  Website,

  sequelize
};
