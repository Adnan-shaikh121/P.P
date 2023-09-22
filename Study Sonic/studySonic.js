const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // use the current timestamp to generate a unique file name
  }
});

const upload = multer({ storage: storage });

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST requests to the root URL for file uploads
app.post('/', upload.single('fileToUpload'), (req, res) => {
  res.send('File uploaded successfully');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
