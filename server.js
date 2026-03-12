const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);


app.get("/", (req,res)=>{
res.send("API working");
});

});