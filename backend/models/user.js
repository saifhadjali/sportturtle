const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    tel:String
    
});
const User=mongoose.model('user',userSchema);
module.exports=User;