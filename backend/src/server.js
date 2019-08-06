const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true });

const port = process.env.PORT || 4000;
const server = express();
server.use(cors());
server.use(express.json())
server.use(routes);
server.listen(port);