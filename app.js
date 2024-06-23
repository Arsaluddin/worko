require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

app.use(express.json());
app.use(authMiddleware);
app.use('/worko/user', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

