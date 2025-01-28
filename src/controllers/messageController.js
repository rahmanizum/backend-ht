// src/controllers/messageController.js
exports.sendMessage = async (req, res) => {
    try {

      console.log("Send Message");
      console.log(req.body);
      // const { remoteConversationId, remoteUserId, payload } = req.body;
  
      // // Simulate sending the message
      // console.log('Sending message to agent:', {
      //   remoteConversationId,
      //   remoteUserId,
      //   payload,
      // });
  
      // Respond with success
      res.status(200).json({ message: 'Message sent to agent successfully.' });
    } catch (err) {
      console.error('Error sending message:', err);
      res.status(500).json({ error: 'Failed to send the message.' });
    }
  };
  