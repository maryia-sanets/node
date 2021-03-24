const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(`${path.parse(__dirname).dir}/views/home.html`);
});

router.get('/about', (req, res) => {
  res.sendFile(`${path.parse(__dirname).dir}/views/about.html`);
});

module.exports = router;