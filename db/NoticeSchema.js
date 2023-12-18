const mongoose= require('mongoose');
const noticeSchema= new mongoose.Schema({
    notice:String,
    category:String
});
module.exports = mongoose.model("notices",noticeSchema);
