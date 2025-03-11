const mongoose = require('mongoose');
require("dotenv").config();

function databaseConnect(){
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ Connection Error:", err));
    console.log(process.env.DATABASE_URL);
}

module.exports = databaseConnect;