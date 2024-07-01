import express from 'express';
import { Order } from '../models/orderModel.js';
const router = express.Router();

router.post('/creates', async (request, response) => {
    try {
       
        if (!request.body.orderid || !request.body.name || !request.body.date || !request.body.bookname || !request.body.price || !request.body.cash ) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const newOrder = {
            orderid: request.body.orderid,
            name: request.body.name,
            date: request.body.date,
            bookname: request.body.bookname,
            price: request.body.price,
            cash: request.body.cash,
           
        };

        const order = await Order.create(newOrder);

        return response.status(201).send(order);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all orders
router.get('/history', async (request, response) => {
    try {
        const orders = await Order.find({});
        return response.status(200).json({
            count: orders.length,
            data: orders
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get order by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const order = await Order.findById(id);

        if (!order) {
            return response.status(404).json({ message: 'Order not found' });
        }

        return response.status(200).json(order);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Update an order
router.put('/:id', async (request, response) => {
    try {
       
        if (!request.body.orderid || !request.body.name || !request.body.date || !request.body.bookname || !request.body.price || !request.body.cash ) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const { id } = request.params;
        const result = await Order.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Order not found' });
        }

        return response.status(200).send({ message: 'Order updated successfully', order: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete an order
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Order.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Order not found' });
        }

        return response.status(200).send({ message: 'Order deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
