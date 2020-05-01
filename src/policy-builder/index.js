const { EventEmitter } = require("events");

class PolicyBuilder extends EventEmitter {
  constructor(deps) {
    super();

    this._commands = [];
    this._writer = deps.writer;

    this._writer.on("finish", () => {
      this.emit(this._writer.result);
    });
  }

  _execute(command, policy) {
    const opts = { policy, writer: this._writer };

    command.call(this, opts);
    this._writer.write("\n\n");
  }

  use(command) {
    this._commands.push(command);
  }

  _build(policy) {
    this._commands.forEach((command) => {
      this._execute(command, policy);
    });

    this._writer.end();
  }

  _promiseHandler(policy) {
    const handler = (resolve) => {
      this._writer.on("finish", () => {
        resolve(this._writer.result.toString());
      });

      this._build(policy);
    };

    return new Promise(handler);
  }

  build(policy) {
    return this._promiseHandler(policy);
  }
}

module.exports = PolicyBuilder;
