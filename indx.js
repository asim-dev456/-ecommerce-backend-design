const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`server started at PORT:${PORT}`);
});
