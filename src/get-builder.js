const PolicyBuilder = require("./policy-builder");
const commands = require("./commands");

module.exports = (func) => (cradle) => {
  const instance = new PolicyBuilder(cradle);
  func({ builder: instance, commands });

  return instance;
};
