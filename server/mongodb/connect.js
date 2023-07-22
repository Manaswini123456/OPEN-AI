const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Replace 'your_mongodb_uri' with your MongoDB connection URI
const mongoURI = "mongodb+srv://root:root@cluster0.qcoffss.mongodb.net/"

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  