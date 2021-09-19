const mongoose=require('mongoose');
const weatherSchema=mongoose.Schema({
    city:String,
   
});
const Weather=mongoose.model('weather',weatherSchema);
module.exports=Weather;