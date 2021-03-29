const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const PORT = 3001;

const app = express();
app.use(express.json());

app.use('/todos', routes);

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})
