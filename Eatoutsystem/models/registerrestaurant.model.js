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
    managersphone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required:true
    },
    cuisines: {
        type: String,
       required:true
    },
    username:{
    type:String,
    required:true

    }
})

const Register= mongoose.model('Register', RegistrationSchema);
module.exports=Register