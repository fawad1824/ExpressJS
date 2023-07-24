const express =require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;


app.use("/api/contact",require("./routes/contactRoutes.js"));

app.listen(PORT ,()=> {
    console.log(`Connected to ${PORT}`)
});
