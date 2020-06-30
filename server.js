const express = require('express'); // our express server
const app = express(); // generate an app object
const bodyParser = require('body-parser'); // requiring the body-parser
// const PORT = process.env.PORT || 3030; // port that the server is running on => localhost:3030
const db = require('./app/models/app'); // requre models
const routes = require('./routes/todo')(app, db); // require routes
const CONFIG = require('./app/config/app');
const serializers = require('./app/serializers/app'); // requre serializers

app.use(bodyParser.json()); // telling the app that we are going to use json to handle incoming payload

app.listen(CONFIG.PORT, function() {
  // listening on port 3030
  console.log(`listening on port ${CONFIG.PORT}`) // print this when the server starts
});
