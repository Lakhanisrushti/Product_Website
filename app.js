const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();

// DB connection
mongoose.connect('mongodb://localhost:27017/cosmetic_store')
    // , 
    // {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', productRoutes);

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.listen(3000);