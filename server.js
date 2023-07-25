const express =require('express');
require('dotenv').config();
const errorHandler= require('./middlewares/errorHandlers');
const connectDB=require("./config/dbConnection.js");
connectDB();


const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/contact",require("./routes/contactRoutes.js"));
app.use(errorHandler);
app.listen(PORT ,()=> {
    console.log(`Connected to ${PORT}`)
});

49.499
