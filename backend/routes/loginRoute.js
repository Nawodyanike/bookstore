import express from 'express';
import { Login } from '../models/Login.js'; // Ensure this path is correct
import bcrypt from 'bcryptjs';

const router = express.Router();

// Authentication route
router.post('/authenticate', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: 'Please provide username and password' });
    }

    const user = await Login.findOne({ username });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }

    return res.status(200).send({ message: 'Login successful' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Create new user route
router.post('/create', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: 'Please provide username and password' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newLogin = {
      username,
      password: hashedPassword,
    };

    const login = await Login.create(newLogin);

    return res.status(201).send(login);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get all logins
router.get('/', async (req, res) => {
  try {
    const logins = await Login.find({});

    return res.status(200).json({
      count: logins.length,
      data: logins,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Get login by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const login = await Login.findById(id);

    if (!login) {
      return res.status(404).json({ message: 'Login not found' });
    }

    return res.status(200).json(login);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Update login
router.put('/:id', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: 'Please provide username and password' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedLogin = {
      username,
      password: hashedPassword,
    };

    const { id } = req.params;
    const result = await Login.findByIdAndUpdate(id, updatedLogin, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).send({ message: 'User updated successfully', login: result });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Delete login
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Login.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;
