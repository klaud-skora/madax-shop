const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');
const newOrderRoutes = require('./routes/newOrder.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', newOrderRoutes);

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), err => {
    if(err) res.status(505).send(err);
  });
});

/* API ERROR PAGES */
app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

/* MONGOOSE */
process.env === 'production'
? mongoose.connect(`mongodb+srv://${process.env.GITHUB_USERNAME}:${process.env.PASSWORD}@cluster0-9fa1i.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'MadaxDB' })
: mongoose.connect('mongodb://localhost:27017/MadaxDB', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'MadaxDB' });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;
