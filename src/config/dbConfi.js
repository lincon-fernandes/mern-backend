// mongodb+srv://usuario:<password>@main.dfuuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require('mongoose');

const dbConfig =
  'mongodb+srv://usuario:usuario@main.dfuuc.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {});

module.exports = connection;
