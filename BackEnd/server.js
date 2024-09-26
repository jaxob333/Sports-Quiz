//database only connected to backend 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors()); 

const dbURI = 'mongodb+srv://jaedwardss2020:f1f1YrPgQ5b8zikW@cluster0.nz4f2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection string
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const photoSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
});

//API not set up
const Photo = mongoose.model('Photo', photoSchema);

app.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching photos' });
  }
});

app.post('/photos', async (req, res) => {
  try {
    const newPhoto = new Photo(req.body);
    await newPhoto.save();
    res.json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the photo' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});