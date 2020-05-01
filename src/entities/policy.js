class Policy {
  constructor(opts) {
    this._id = opts.id;
    this._organization = opts.organization;

    this._command = { key: "allow", value: false };
    this._rules = [];
    this._imports = ["input"];
  }

  get id() {
    return this._id;
  }

  get command() {
    return this._command;
  }

  organizationName(name) {
    this._organization.set("name", name);
  }

  project(name) {
    this._organization.set("project", name);
  }

  get organization() {
    return this._organization;
  }

  addImport(item) {
    this._imports.push(item);
  }

  addRule(path, value) {
    this._rules.push({ path, value });
  }

  get imports() {
    return this._imports;
  }

  get rules() {
    return this._rules;
  }
}

module.exports = Policy;
