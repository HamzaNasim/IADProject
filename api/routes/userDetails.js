const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const User = require('../../models/user');
const member = require('../../models/task');
const userDetails = require('../../models/userDetails');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');





//Project Page Datails Api

router.post('/', (req , res)=>{

     userDetails.sync({ force: false }).then(() => {     

        

        userDetails.create({

              
                   TeamDescription : req.body.TeamDescription,
                   TeamName : req.body.TeamName,
                   userId : req.body.userId

                
        });

        res.json({

             message : "Details added successfully",
        })


     }).catch(err => {

                res.status(500).json({

                    error: err

                })

            });}

);

//Team member email api

router.put('/emails/:id', (req , res)=>{

     userDetails.findOne({

        where: { userId : req.params.id }

    })

     .then(function (userDetails)  {     

        

        userDetails.update({

              
            member1 : req.body.member1,
            member2 : req.body.member2,
            member3 : req.body.member3,
            member4 : req.body.member4,
               

                
        });

        res.json({

             message : "Emails Details added successfully",
        })


     }).catch(err => {

                res.status(500).json({

                    error: err

                })

            });}

);

//Project Name api

router.put('/ProjectName/:id', (req , res)=>{

     userDetails.findOne({

        where: { userId : req.params.id }

    })

     .then(function (userDetails)  {     

        

        userDetails.update({

              
          ProjectName : req.body.ProjectName
               

                
        });

        res.json({

             message : "Project Name added successfully",
        })


     }).catch(err => {

                res.status(500).json({

                    error: err

                })

            });}

);


module.exports = router;
