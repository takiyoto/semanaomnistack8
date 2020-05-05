const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const io = require('socket.io');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack10-o7zmp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);