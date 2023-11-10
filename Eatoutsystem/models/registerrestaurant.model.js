const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RegistrationSchema = new Schema({
    restaurantname:{
        type: String,
        required: true
    },
    managersname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    restaurantphone: {
        type: String,
        required: true
    },
    mangersphone: {
        type: String,
        required: true
    },
    location: {
        type: Date,
        required:true
    },
    cuisines: {
        type: Date,
       required:true
    },
    username:{
    type:String,
    required:true

    }
})

const Register= mongoose.model('Register', RegistrationSchema);
module.exports=Register