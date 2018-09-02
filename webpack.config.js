const path = require('path'),
  nodeExternals = require('webpack-node-externals');

const serverConfig = {
  target: 'node',
  mode: 'development',
  watch: true,
  context: path.join(__dirname, 'server'),
  entry: ['./index.js'],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve('./build')
  },
  externals: [nodeExternals()], //to exclude node_modules
};

const workerConfig = {
  target: 'node',
  mode: 'development',
  watch: true,  // Set to true to watch local changes
  context: path.join(__dirname, 'worker'),  // context of the entry points
  entry: ['./index.js'],
  output: {
    filename: 'worker.bundle.js',
    path: path.resolve('./build')
  },
  externals: [nodeExternals()], //to exclude node_modules
};

module.exports = [serverConfig, workerConfig];

// To use environment variables, module.exports must
// point to a function. 
// module.exports = (env) => {
//   console.log(env);
//   return [serverConfig, workerConfig];
// };