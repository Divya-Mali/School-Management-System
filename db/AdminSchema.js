const mongoose= require('mongoose');
const adminSchema= new mongoose.Schema({
    email:String,
    password:String,
    category:String
});
module.exports = mongoose.model("admins",adminSchema);
