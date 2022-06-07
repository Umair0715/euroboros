require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.use('/' , require('./routes/emailRoutes'));

connectDB();

const PORT = process.env.PORT;
app.listen(PORT , () => console.log(`server is running on post ${PORT}`))