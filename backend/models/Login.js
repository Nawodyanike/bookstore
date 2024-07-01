import mongoose from 'mongoose';

const Loginschema = mongoose.Schema(
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
    }
);

export const Login= mongoose.model('Login', Loginschema);