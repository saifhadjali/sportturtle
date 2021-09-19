const mongoose=require('mongoose');
const courseSchema=mongoose.Schema({
    name:String,
    price:String,
    trainer:String,
    duration:String,
    capacity:String
});
const Course=mongoose.model('Course',courseSchema);
module.exports=Course;