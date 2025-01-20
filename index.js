const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');


// dot env configuration
dotenv.config();



// DB connection
connectDb();


// rest object
const app = express();



// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



// route

app.use('/api/v1/auth',require('./routes/authRoutes'));
app.use('/api/v1/user',require('./routes/userRoutes'));
app.use('/api/v1/resturant',require('./routes/resturantRoutes'));
app.use('/api/v1/category',require('./routes/categoryRoutes'));
app.use('/api/v1/food',require('./routes/foodRoutes'));

app.get('/', (req, res) => {
  return res.status(200).send('Hello World!');
});



// PORT
const port = process.env.PORT || 8080;



// listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});