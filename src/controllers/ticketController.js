// src/controllers/ticketController.js
exports.closeTicket = async (req, res) => {
    try {
      const { botpressConversationId } = req.body.payload;
  
      // Simulate closing the ticket
      console.log(`Closing ticket with ID: ${botpressConversationId}`);
  
      // Respond with success
      res.status(200).json({ message: 'Ticket closed successfully.' });
    } catch (err) {
      console.error('Error closing ticket:', err);
      res.status(500).json({ error: 'Failed to close the ticket.' });
    }
  };
  