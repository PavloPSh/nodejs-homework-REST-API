const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require("dotenv").config();


const { DB_HOST, PORT = 3000 } = process.env;
// прописати в env на render.com


mongoose.connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000")
    });
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });


const app = require('./app');



