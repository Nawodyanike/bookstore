import express from 'express';
import { Feedback} from '../models/feedbackmodel.js';
const router = express.Router();


router.post('/create', async (request, response) => {
    try {
        if (!request.body.comments  || ! request.body.name ) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const newFeedback = {
            comments : request.body.comments,
            name : request.body.name,
         
           

        };

        const feedback = await Feedback.create(newFeedback);

        return response.status(201).send(feedback);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route to get all books
router.get('/all', async (request, response) => {
    try {
        const feedbacks = await Feedback.find({});

        return response.status(200).json({
            count: feedbacks.length,
            data: feedbacks
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
// get login id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const feedback = await Feedback.findById(id);

        if (!feedback) {
            return response.status(404).json({ message: 'error register' });
        }

        return response.status(200).json(feedback);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//update

router.put('/:id', async (request, response) => {
    try {
        if (!request.body.comments || ! request.body.name) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const { id } = request.params;
        const result = await Feedback.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'user not found' });
        }

        return response.status(200).send({ message: 'user updated successfully', feedback: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


//delete user

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Feedback.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'user not found' });
        }

        return response.status(200).send({ message: 'user deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
