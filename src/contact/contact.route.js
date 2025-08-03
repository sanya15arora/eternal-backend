const express = require('express');
const router = express.Router();
const Contact = require('./contact.modal.js');

router.post('/submit-contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    try {
        const savedContact = await Contact.create({ name, email, subject, message });
        return res.status(201).json({ success: true, data: savedContact });
    } catch (error) {
        console.error('Error handling contact form:', error);
        return res.status(500).json({ error: 'Something went wrong.' });
    }
});

module.exports = router;
