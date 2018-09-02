const express = require('express');
const logger = require('../shared/logger')('server');

const app = express();
const port = 8080;

app.get('/', function(req, res) {
  logger.say('Request for server');

  res.send('Hello Concurrently!!');
});

app.listen(port, function() {
  logger.say(`Listening on port: ${port}`);

  // We can access variables from the "config" object in packages.json
  logger.say(`Port from npm package: ${process.env.npm_package_config_port}`);
});