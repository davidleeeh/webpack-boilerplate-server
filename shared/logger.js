class Logger {
  constructor(module) {
    this._module = module;
  }

  say(message) {
    console.log(`[${this._module}] ${message}`);
  }
}

module.exports = function(module) {
  return new Logger(module);
};