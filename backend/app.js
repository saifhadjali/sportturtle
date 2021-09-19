// import express module
const express=require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/turtleDB');

// create express application
const app=express();
const Course=require('./models/Course');
const Trainer=require('./models/Trainer');
const User=require('./models/User');
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


// import body parser module
const bodyParser = require("body-parser");
const bcrypt=require('bcrypt');
const Weather = require('./models/weather');
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object 
app.use(bodyParser.urlencoded({ extended: true  })); 
// buisness logic get all course
// http://localhost:3000/ => '/'
app.get('/courses',(req,res)=>{
    console.log(' here into get all courses');
    Course.find((err,docs)=>{
        if (err) {
            console.log('error into DB',err)
        } else {
           res.status(200).json({
               findedCourses:docs,
           })
        }
    });
});
app.post('/courses',(req,res)=>{
    console.log(' here into get add course');
    console.log('here object from FE',req.body);
    const courseObject=new Course({
        name:req.body.name,
        price:req.body.price,
        trainer:req.body.trainer,
        duration:req.body.duration,
        capacity:req.body.capacity

    });
    courseObject.save().then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'add with succes'
                })
            }
        }
    );
});
app.get('/courses/:id',(req,res)=>{
    console.log(' here into get course by id',req.params.id);
    Course.findOne({_id:req.params.id}).then(
        (result)=>{
            res.status(200).json({
                findedCourse:result
            })
        }
    )
});
app.delete('/courses/:id',(req,res)=>{
    console.log(' here into delete course by id',req.params.id);
    Course.deleteOne({_id:req.params.id}).then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'delete with succes'
                })
            }
        }
    )
});
app.put('/courses/:id',(req,res)=>{
    console.log(' here into edit course by id',req.params.id);
    console.log(' here into edit object',req.body);
    Course.updateOne({_id:req.params.id},req.body).then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'update with succes'
                })
            }
        }
    )

});
// traitement logique search by name
app.post('/courses/search/trainerName',(req,res)=>{
    console.log('here trainer name',req.body)
    Course.find({trainer:req.body.name}).then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    findedCourses:result
                })
            }
        }
    )
})
app.post('/trainers',(req,res)=>{
    console.log(' here into get add trainer');
    console.log('here object from FE',req.body);
    const trainerObject=new Trainer({
        name:req.body.name,
        specilaty:req.body.specilaty,
        experience:req.body.experience,
        tel:req.body.tel
        

    });
    trainerObject.save().then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'add with succes'
                })
            }
        }
    );
});
app.get('/trainers',(req,res)=>{
    console.log(' here into get all courses');
    Trainer.find((err,docs)=>{
        if (err) {
            console.log('error into DB',err)
        } else {
           res.status(200).json({
               findedTrainers:docs,
           })
        }
    });
});
app.get('/trainers/:id',(req,res)=>{
    console.log(' here into get course by id',req.params.id);
    Trainer.findOne({_id:req.params.id}).then(
        (result)=>{
            res.status(200).json({
                findedTrainer:result
            })
        }
    )
});
app.put('/trainers/:id',(req,res)=>{
    console.log(' here into edit course by id',req.params.id);
    console.log(' here into edit object',req.body);
    Trainer.updateOne({_id:req.params.id},req.body).then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'update with succes'
                })
            }
        }
    )

});
app.delete('/trainers/:id',(req,res)=>{
    console.log(' here into delete course by id',req.params.id);
    Trainer.deleteOne({_id:req.params.id}).then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'delete with succes'
                })
            }
        }
    )
});
app.post('/users',(req,res)=>{
    console.log(' here into get add user');
    console.log('here object from FE',req.body);
    const userObject=new  User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        tel:req.body.tel
        

    });
    userObject.save().then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'add with succes'
                })
            }
        }
    );
});
app.get('/users',(req,res)=>{
    console.log(' here into get all users');
   User.find((err,docs)=>{
        if (err) {
            console.log('error into DB',err)
        } else {
           res.status(200).json({
               findedUsers:docs,
           })
        }
    });
});
app.get('/users/:id',(req,res)=>{
    console.log(' here into get course by id',req.params.id);
    Course.findOne({_id:req.params.id}).then(
        (result)=>{
            res.status(200).json({
                findedCourse:result
            })
        }
    )
});
app.post('/weather',(req,res)=>{
    console.log(' here into get add weather');
    console.log('here object from FE',req.body);
    const weatherObject=new Weather({
        city:req.body.city,
      
    });
    weatherObject.save().then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message:'add with succes'
                })
            }
        }
    );
});
// app is exportable
module.exports=app;