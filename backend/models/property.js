const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    }
})

const propertyModal = mongoose.model('Property' , propertySchema)

module.exports = propertyModal;