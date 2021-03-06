const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Defir porta onde o servre vai responder
const port = process.env.PORT || 3000;

// Definindo as rotas
const storeRoute = require('./src/routes/storeRoute');
const productRoute = require('./src/routes/productRoute'); 
const indexRoute = require('./src/routes/indexRoute');
const customerRoute = require('./src/routes/customerRoute');

// Persistencia 
const connectionString = "mongodb+srv://XQUpPhzwTOjgnE62:XQUpPhzwTOjgnE62@cluster0.tzukg.mongodb.net/bdpos?retryWrites=true&w=majority"
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false });

// Configurar o app para usar o body-parser e transformar a req em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Vincular a aplicaçap(app) com o motor de rotas 
//rota principal
app.use('/api', indexRoute);

// rota para produto
app.use('/api/product/', productRoute);

// rota para lojas
app.use('/api/store/', storeRoute);

app.use('/api/customer/', customerRoute);

app.listen(port, () => {
  console.log("server is up and running..");
});