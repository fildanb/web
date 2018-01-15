let Sequelize = require('sequelize');
const sequelize = new Sequelize('c9', 'root', '', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;