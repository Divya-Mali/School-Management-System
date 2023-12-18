const mongoose= require('mongoose');
const studentSchema= new mongoose.Schema({
    fname:String,
    email:String,
    password:String,
    mobile:Number,
    fees:Number,
    standard:Number,
    category:String
});
module.exports = mongoose.model("students",studentSchema);
