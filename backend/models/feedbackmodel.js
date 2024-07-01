import mongoose from 'mongoose';

const feedbackschema = mongoose.Schema(
    {
        comments:
        {
            type:String,
            required:true,
        },

        name:
        {
            type:String,
            required: true,
        },


    }
);

export const Feedback= mongoose.model('Feedback', feedbackschema);