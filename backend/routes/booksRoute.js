import express from 'express';
import { Book} from '../models/bookModel.js';
const router = express.Router();

// Route to create a new book
router.post('/create', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishyear || !request.body.isbn || !request.body.genre || !request.body.stock ) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishyear: request.body.publishyear,
            isbn: request.body.isbn,
            genre: request.body.genre,
            stock: request.body.stock,
           

        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route to get all books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get a book by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);

        if (!book) {
            return response.status(404).json({ message: 'book not found' });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a book by ID
router.put('/edit/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishyear || !request.body.isbn || !request.body.genre || !request.body.stock ) {
            return response.status(400).send({
                message: 'send all fields',
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'book not found' });
        }

        return response.status(200).send({ message: 'book updated successfully', book: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route to delete a book by ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'book not found' });
        }

        return response.status(200).send({ message: 'book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
