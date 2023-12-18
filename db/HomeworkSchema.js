const mongoose= require('mongoose');
const homeworkSchema= new mongoose.Schema({
    homework:String,
    submission:Date,
    standard:String,
    subject:String
});
module.exports = mongoose.model("homeworks",homeworkSchema);
