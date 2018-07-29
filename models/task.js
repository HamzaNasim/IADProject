const Sequelize = require('sequelize');
const db = require('../db');
const TestUser = require('./user')
const userDetails = require('./userDetails')

  const task = db.define('tasks', {
  
      Id: {

          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true

      },

      TeamId: {

          type: Sequelize.INTEGER,
       

      },

      Task: {

          type: Sequelize.STRING
      },

      AssignTo: {

          type: Sequelize.STRING,

      },

      DueDate : {

        type : Sequelize.DATEONLY

      },

      TaskDescription: {

        type : Sequelize.STRING
        
      }

  },

);

module.exports = task;

task.belongsTo(userDetails,{

        foreignKey : 'TeamId',
        targetKey : 'userId'

});