const Sequelize = require('sequelize');
const db = require('../db');
const TestUser = require('./user')

  const userDetails = db.define('userDetails', {
  
      Id: {

          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true

      },

      userId: {

          type: Sequelize.INTEGER,
       

      },

      TeamDescription: {

          type: Sequelize.STRING
      },

      TeamName: {

          type: Sequelize.STRING,

      },

      member1: {

          type: Sequelize.STRING,
      },

      member2: {

          type: Sequelize.STRING,
      },

      member3: {

          type: Sequelize.STRING,
      },
      member4: {

          type: Sequelize.STRING,
      },

      ProjectName : {

        type : Sequelize.STRING
        
      },

      

  },

);

module.exports = userDetails;

userDetails.belongsTo(TestUser,{

        foreignKey : 'userId',
        targetKey : 'Id'

});


