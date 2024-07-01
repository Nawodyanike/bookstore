import express from 'express';
import { Register} from '../models/register.js';
const router = express.Router();


router.post('/create', async (request, response) => {
    try {
        if (!request.body.username || !request.body.password || ! request.body.email ) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const newRegister = {
            username : request.body.username,
            password: request.body.password, 
            email : request.body.email,
           

        };

        const register = await Register.create(newRegister);

        return response.status(201).send(register);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route to get all books
router.get('/', async (request, response) => {
    try {
        const registers = await Register.find({});

        return response.status(200).json({
            count: registers.length,
            data: registers
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
        const login = await Register.findById(id);

        if (!login) {
            return response.status(404).json({ message: 'error register' });
        }

        return response.status(200).json(register);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//update

router.put('/:id', async (request, response) => {
    try {
        if (!request.body.username || !request.body.password  || !request.body.email) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const { id } = request.params;
        const result = await Register.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'user not found' });
        }

        return response.status(200).send({ message: 'user updated successfully', register: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


//delete user

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Register.findByIdAndDelete(id);

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
