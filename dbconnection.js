const mongoose = require('mongoose');

async function dbconnection() {
  try {
    await mongoose.connect(process.env.CONNECTION_URI);
    console.log('DataBase connected!!');
  } catch (error) {
    console.log('Error:', error);
  }
}

module.exports = dbconnection;
