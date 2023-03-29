const express = require("express");
require("dotenv").config();
require("./connection");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// routes
const TestRoute = require("./routes/testroute");
const CategoryRoute = require("./routes/categoryRoute");
const ProductRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");
const OrderRoute = require("./routes/orderRoute");

// creating an app using express
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

// starting server
let port = process.env.PORT;
app.listen(port, () => {
    console.log(`APP STARTED AT PORT ${port}`);
    //callback fn - Inside a fn calling another fn
});

// using routes
app.use(TestRoute);
app.use(CategoryRoute);
app.use(ProductRoute);
app.use(UserRoute);
app.use(OrderRoute);
// app.use('category',CategoryRoute);
// app.use('product',ProductRoute);
// app.use('user',UserRoute);
