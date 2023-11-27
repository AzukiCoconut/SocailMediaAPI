const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Create a port from .env file or use 3001
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// open the port to listen on
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});