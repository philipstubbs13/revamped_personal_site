const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Message = require('../../models/Message');

// @route         POST api/messages
// @description   Create a message.
// @access        Public
router.post('/', [[
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').not().isEmpty(),
  check('message', 'Message is required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newMessage = new Message ({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    })

    const message = await newMessage.save();

    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

module.exports = router;