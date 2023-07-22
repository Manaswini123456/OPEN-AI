const express = require('express');
const app = express();

const connectDB = require('./mongodb/connect');
const cors = require('cors');
const dotenv = require('dotenv').config();
const dalleRoutes = require('./routes/dalleRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);



app.get('/', async (req, res) => {
    res.send('Hello World!')
  });

  app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
