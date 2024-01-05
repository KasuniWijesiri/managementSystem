const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT|| 400

app.use(cors()); 
app.use(bodyParser.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL, { 
   useNewUrlParser: true,
   useUnifiedTopology: true 
},)
.then(() => console.log('connected successfully'))
.catch((err) => {console.error(err);});
 
const studentRouter=require("./routes/students.js");

app.use("/student",studentRouter);


app.listen(PORT, () => {
console.log('Server is up and running on port number:',PORT);
})

