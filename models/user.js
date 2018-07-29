const Sequelize = require('sequelize');
const db = require('../db');

//Create User Table Structure
const TestUser = db.define('users', {
   
                Id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                },
                
                username : {
                        type: Sequelize.STRING
                },
                  FName: {
                        type: Sequelize.STRING
                },
                email: {
                        type: Sequelize.STRING,
                        
                },
                password: {
                        type: Sequelize.STRING
                },
                 ContactNo : {
                        type: Sequelize.STRING
                },

                active : {

                        type : Sequelize.BOOLEAN,
                        require : true ,
                       defaultValue : false
                },

                temporaryKey  : {
                        
                       type : Sequelize.STRING,
                        require : true ,

                }   ,
  
});

module.exports = TestUser;
