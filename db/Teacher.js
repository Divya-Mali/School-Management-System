const mongoose= require('mongoose');
const teacherSchema= new mongoose.Schema({
    fname:String,
    email:String,
    password:String,
    mobile:Number,
    date:Date,
    salary:Number,
    category:String,
});
module.exports = mongoose.model("teachers",teacherSchema);
