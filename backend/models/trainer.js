const mongoose=require('mongoose');
const trainerSchema=mongoose.Schema({
    name:String,
    specilaty:String,
    experience:String,
    tel:String
    
});
const Trainer=mongoose.model('trainer',trainerSchema);
module.exports=Trainer;