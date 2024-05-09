const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const morgan = require('morgan');
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

//connectDb
const { connectDb } = require('./db/connect');
// database configuration
const run_server = () => {
    try{
        connectDb();
    }catch(error){
        console.log(error)
    }
};

run_server();


//base route
app.get('/', (req, res) => {
    console.log('The server is running!!!')

})

//routes
const inventoryRoutes = require('./backend/routes/inventory');
const salesRoutes = require('./backend/routes/sales')

// productsRoutes
app.use('/products', inventoryRoutes);

//salesRoutes
app.use('/sales', salesRoutes);

//listen
app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
});



