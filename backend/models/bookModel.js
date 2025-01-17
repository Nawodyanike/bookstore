import mongoose from "mongoose";

const bookschema= mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
        },
        author:{
            type: String,
            required:true,
        },

        publishyear:{
            type: Number,
            required:true,
        },

        isbn :{
            type:Number,
            required:true,
        },

        genre :{
            type:String,
            required:true,
        },

        stock:{
            type: Number,
            required: true,
        },

        

        
    },

    {
        timestamps :true,
    }
);
export const Book = mongoose.model('Book', bookschema);