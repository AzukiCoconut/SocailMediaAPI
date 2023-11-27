const { connect, connection } = require('mongoose');

// connect to the local host mongodb database
connect('mongodb://127.0.0.1:27017/socialnetworkdb');

module.exports = connection;