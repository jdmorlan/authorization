const urlJoin = require("url-join");
const fetch = require("node-fetch");

const VALIDATE_URL = "/v1/data";

class PolicyChecker {
  constructor(deps) {
    this._opaRoot = deps.opaRoot;
  }

  getUrl(organization) {
    return urlJoin(this._opaRoot, VALIDATE_URL, ...organization.asArray());
  }

  getFetchOptions(input) {
    return {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        input: input,
      }),
    };
  }

  async check(organization, input) {
    const url = this.getUrl(organization);
    const fetchOptions = this.getFetchOptions(input);

    const response = await fetch(url, fetchOptions);
    const json = await response.json();

    const { result, ...rest } = json;

    return {
      package: organization.asArray().join("."),
      result: result,
      input: input,
      ...rest,
    };
  }
}

module.exports = PolicyChecker;
