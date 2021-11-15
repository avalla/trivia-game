const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Trivia Game API up and running');
});

module.exports = router;
