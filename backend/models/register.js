import mongoose from 'mongoose';

const Registerschema = mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true,
        },

        password:
        {
            type:String,
            required:true,
        },

        email : {
            type: String,
            required: true,
        },
    }
);

export const Register= mongoose.model('Register', Registerschema);