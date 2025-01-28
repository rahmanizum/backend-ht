// src/controllers/conversationController.js

const { validateCreateConversation } = require('../services/validationService');

exports.createConversation = async (req, res) => {
    try {

        // const { error } = validateCreateConversation(req.body);
        // if (error) return res.status(400).json({ error: error.details[0].message });
        console.log("Create Conversation");
        console.log(req.body);
        // const { title, description, messages } = req.body.payload;
        // Simulate conversation creation
        const conversationId = `conv_${Date.now()}`;
        res.status(200).json({ id: conversationId });
    } catch (err) {
        res.status(500).json({ error: 'Error creating conversation' });
    }
};
