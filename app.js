import express from 'express';
import dotenv from "dotenv";
import conn from "./db.js" // db.js olmak zorunda yoksa ecmaScript calismiyor.

// import timeRoute from './routes/timeRoute.js'

import pageRoute from './routes/pageRoute.js';
import timeRoute from './routes/timeRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

//connection to the database
conn();

const app = express();
const port = process.env.PORT;


// ejs template engine
app.set('view engine', 'ejs');


// static files middleware
app.use(express.static('public'));
app.use(express.json()); //? body'de gönderilen json formatındaki veriler çalışması için
app.use(express.urlencoded({extended: true})) // form body icindekileri parse edebilmesi icin


//! routes

app.use('/', pageRoute);
app.use('/time', timeRoute);
app.use('/users', userRoute);



// app.get('/', (req, res) => {
//     res.render('index')
// });


// app.get('/about', (req, res) => {
//     res.render('about')
// })




app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
});