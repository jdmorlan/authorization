const allowedKeys = ["name", "project", "policy"];

class Organization {
  constructor() {
    this._state = {};
  }

  static from(state) {
    const instance = new Organization();
    Object.entries(state).forEach((entry) => {
      const [key, value] = entry;
      instance.set(key, value);
    });

    return instance;
  }

  set(key, value) {
    if (allowedKeys.includes(key)) {
      this._state[key] = value;
    }
  }

  get name() {
    return this._state.name;
  }

  get project() {
    return this._state.project;
  }

  get policy() {
    return this._state.policy;
  }

  asArray() {
    return [this.name, this.project, this.policy];
  }
}

module.exports = Organization;
