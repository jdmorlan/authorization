const { Writable } = require("stream");

class MemoryPolicyWriter extends Writable {
  constructor() {
    super();
    this._store = Buffer.from("");
  }

  get result() {
    return this._store;
  }

  _write(chunk, encoding, done) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : new Buffer(chunk, encoding);
    this._store = Buffer.concat([this._store, buffer]);
    done();
  }
}

module.exports = MemoryPolicyWriter;
