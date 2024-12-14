const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:Schema.Types.String,required:true},
    password:{type:Schema.Types.String,required:true},
    avatar:{type:Schema.Types.String,required:true},
    token:{type:Schema.Types.String,required:true},
},{timestamps:true,toJSON: { virtuals: true }});


module.exports = mongoose.model('user',userSchema);