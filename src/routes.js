const express = require('express');
const conversationController = require('./controllers/conversationController');
const ticketController = require('./controllers/ticketController');
const userController = require('./controllers/userController');
const messageController = require('./controllers/messageController');
const router = express.Router();

// Ping Service
router.post('/ping', (req, res) => res.status(200).json({ message: 'Service is ready' }));

// Conversation Endpoints
router.post('/createRemoteConversation', conversationController.createConversation);
router.post('/closeRemoteTicket', ticketController.closeTicket);
router.post('/createRemoteUser', userController.createUser);
router.post('/botSendsMessage', messageController.sendMessage);

module.exports = router;
