const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const staticRouter = require('./routes/staticroutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(staticRouter);
const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`server started at PORT:${PORT}`);
});
