const mongoose= require('mongoose');
const leaveSchema= new mongoose.Schema({
    category:String,
    fname:String,
    reason:String,
    from:Date,
    to:Date
});
module.exports = mongoose.model("leaves",leaveSchema);
