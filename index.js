require('dotenv').config();
const express = require('express');
const router = require('./routes');
const app = express();
const port = process.env.PORT || 3000;
router(app);

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});