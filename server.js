const express =require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const errorHandler= require('./middlewares/errorHandlers');

app.use(express.json());
app.use("/api/contact",require("./routes/contactRoutes.js"));
app.use(errorHandler);
app.listen(PORT ,()=> {
    console.log(`Connected to ${PORT}`)
});
