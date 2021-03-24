const express = require('express');
const path = require('path')
const todoRoutes = require('./routes/routes') 

const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.use(todoRoutes);
app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})
