import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        orderid: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        bookname: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        cash: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = mongoose.model('Order', orderSchema);
