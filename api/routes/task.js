const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const User = require('../../models/user');
const task = require('../../models/task');
const userDetails = require('../../models/userDetails');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');



//task creation Api

router.post('/', (req , res)=>{

     task.sync({ force: false }).then(() => {   

        task.create({

            Task: req.body.Task,
            AssignTo: req.body.AssignTo,
            DueDate: req.body.DueDate,
            TaskDescription: req.body.TaskDescription,
            TeamId: req.body.TeamId


        }).then(function (task){

        res.json({
 
             
             code: 200,
             message: "Task created",
             Id : task.Id
           

     })

        }).catch(err => {

        res.status(500).json({

            error: err

        })

    });
     
}

)});


//get api for task

router.get('/:id', (req, res) => {



    task.findAll({

        where: { TeamId: req.params.id }

    }).then(function (task) {


        res.json(

            task

        );

    });
});

router.delete('/delete/:id', (req, res) => {

   task.destroy({
    where: {

      Id : req.params.id

    }

   }).then(()=>{

    res.status(200).json({

        message : "Task Deleted Successfully"

    });



   })
})





//get api for User name in User table

router.get('/user/:id', (req, res) => {

    User.find({

        where: { Id : req.params.id }

    }).then(function (User) {


        res.json(

            User.FName

        );

    });
});




//get api for Team members 

router.get('/allteam/:id', (req, res) => {

    userDetails.find({

        where: { userId : req.params.id }

    }).then(function (userDetails) {


        res.json({

            
                member1 : userDetails.member1,
                member2 : userDetails.member2,
                member3 : userDetails.member3,
                member4 : userDetails.member4

        });

    });
}

);


module.exports = router;