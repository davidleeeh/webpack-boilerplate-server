const express = require('express');
const logger = require('../shared/logger')('worker');

const app = express();
const port = 8090;

app.get('/', function(req, res) {
  logger.say('Request for worker');
});

app.listen(port, function() {
  logger.say(`Listening on port: ${port}`);
});