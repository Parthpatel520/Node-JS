const mongoose = require('mongoose');

const mainData = async ()=>{
    const url ="mongodb://127.0.0.1:27017/form"
   await mongoose.connect(url)
}

mainData();

const stdentschema = new mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:String
});

const FormModel = new mongoose.model('adminstd',stdentschema)

module.exports = FormModel;

