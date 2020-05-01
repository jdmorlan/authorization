const fetch = require("node-fetch");
const urlJoin = require("url-join");

const POLICY_PATH = "/v1/policies";

class PolicyPublisher {
  constructor(deps) {
    this._builder = deps.builder;
    this._opaRoot = deps.opaRoot;
  }

  getUrl(policy) {
    return urlJoin(this._opaRoot, POLICY_PATH, policy.id);
  }

  async getFetchOptions(policy) {
    const content = await this._builder.build(policy);
    console.log(content);

    return {
      method: "PUT",
      headers: {
        "Content-Type": "text/plain",
      },
      body: content,
    };
  }

  async publish(policy) {
    const url = this.getUrl(policy);
    const fetchOptions = await this.getFetchOptions(policy);

    const response = await fetch(url, fetchOptions);
    const json = await response.json();

    if (!response.ok) {
      return { data: json, policy: fetchOptions.body };
    } else {
      return { data: json };
    }
  }
}

module.exports = PolicyPublisher;
